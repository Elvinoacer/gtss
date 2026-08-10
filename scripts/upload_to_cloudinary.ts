import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const BASE_DIR = path.join(__dirname, '../Res_screenshots');
const SUBFOLDERS = ['admincenter', 'clientimages', 'waiterscreens'];
const MAPPING_PATH = path.join(__dirname, '../cloudinary_mapping.json');

// Load existing mapping if available
let fullMap: Record<string, Record<string, string>> = {
  admincenter: {},
  clientimages: {},
  waiterscreens: {},
};

if (fs.existsSync(MAPPING_PATH)) {
  try {
    fullMap = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));
  } catch (e) {
    console.log('Starting with fresh mapping.');
  }
}

function saveMapping() {
  fs.writeFileSync(MAPPING_PATH, JSON.stringify(fullMap, null, 2));
}

async function uploadSingleFileWithRetry(filePath: string, folder: string, publicId: string, isVideo: boolean, retries = 3): Promise<string | null> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder,
        public_id: publicId,
        resource_type: isVideo ? 'video' : 'image',
        overwrite: true,
        use_filename: true,
        unique_filename: false,
        timeout: 60000, // 60s timeout
      });
      return result.secure_url;
    } catch (err: any) {
      console.warn(`    [Attempt ${attempt}/${retries}] Upload failed for ${publicId}: ${err.message || err}`);
      if (attempt < retries) {
        await new Promise((res) => setTimeout(res, 2000));
      }
    }
  }
  return null;
}

async function uploadFolder(subfolder: string) {
  const dirPath = path.join(BASE_DIR, subfolder);
  if (!fs.existsSync(dirPath)) {
    console.error(`Folder not found: ${dirPath}`);
    return;
  }

  if (!fullMap[subfolder]) {
    fullMap[subfolder] = {};
  }

  const files = fs.readdirSync(dirPath);
  console.log(`Processing ${files.length} files from ${subfolder}...`);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    // Check if already uploaded
    if (fullMap[subfolder][file]) {
      console.log(`  [Skipped] Already uploaded: ${subfolder}/${file}`);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    const isVideo = ext === '.mp4';
    const publicId = path.parse(file).name;
    const folder = `gtss/${subfolder}`;

    console.log(`  [Uploading] ${subfolder}/${file}...`);
    const url = await uploadSingleFileWithRetry(filePath, folder, publicId, isVideo);
    if (url) {
      fullMap[subfolder][file] = url;
      saveMapping();
      console.log(`    -> Success: ${url}`);
    } else {
      console.error(`    -> FAILED after retries: ${subfolder}/${file}`);
    }
  }
}

async function main() {
  console.log('=== Starting Cloudinary Upload (Resilient) ===');
  console.log(`Cloud Name: ${process.env.CLOUDINARY_CLOUD_NAME}`);

  for (const subfolder of SUBFOLDERS) {
    await uploadFolder(subfolder);
  }

  console.log('=== Upload Complete ===');
}

main().catch((err) => {
  console.error('Upload script error:', err);
  process.exit(1);
});
