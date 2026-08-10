import fs from 'fs';
import path from 'path';
import { PrismaClient } from '../prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';

const mappingPath = path.join(__dirname, '../cloudinary_mapping.json');

if (!fs.existsSync(mappingPath)) {
  console.error(`Mapping file not found at ${mappingPath}. Make sure upload script finishes first.`);
  process.exit(1);
}

const rawMapping = fs.readFileSync(mappingPath, 'utf-8');
const fullMap: Record<string, Record<string, string>> = JSON.parse(rawMapping);

const adminMap = fullMap['admincenter'] || {};
const clientMap = fullMap['clientimages'] || {};
const waiterMap = fullMap['waiterscreens'] || {};

// Construct Old DO URL -> New Cloudinary URL map
const urlReplacementMap: Record<string, string> = {};

for (const [filename, cloudUrl] of Object.entries(adminMap)) {
  const oldUrl = `https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/${filename}`;
  urlReplacementMap[oldUrl] = cloudUrl;
}

for (const [filename, cloudUrl] of Object.entries(clientMap)) {
  const oldUrl = `https://justintime.sfo3.digitaloceanspaces.com/gtss/client/${filename}`;
  urlReplacementMap[oldUrl] = cloudUrl;
}

for (const [filename, cloudUrl] of Object.entries(waiterMap)) {
  const oldUrl = `https://justintime.sfo3.digitaloceanspaces.com/gtss/waiterscreens/${filename}`;
  urlReplacementMap[oldUrl] = cloudUrl;
}

console.log(`Total DO URL mappings created: ${Object.keys(urlReplacementMap).length}`);

// 1. Update experience-data.ts
const expDataPath = path.join(__dirname, '../app/(public)/products/restaurant-manager/experience/experience-data.ts');
let expDataContent = fs.readFileSync(expDataPath, 'utf-8');
let expDataReplacedCount = 0;

for (const [oldUrl, newUrl] of Object.entries(urlReplacementMap)) {
  if (expDataContent.includes(oldUrl)) {
    expDataContent = expDataContent.replaceAll(oldUrl, newUrl);
    expDataReplacedCount++;
  }
}

fs.writeFileSync(expDataPath, expDataContent, 'utf-8');
console.log(`Updated experience-data.ts: replaced ${expDataReplacedCount} DigitalOcean URLs.`);

// 2. Check Database for any DO URLs or image URLs that need updating
async function updateDatabase() {
  console.log('Checking database records to update references...');
  const connectionString = process.env.DATABASE_URL!;
  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    // Check Products
    const products = await prisma.product.findMany();
    for (const p of products) {
      let updated = false;
      let newImages = [...p.images];
      for (let i = 0; i < newImages.length; i++) {
        if (urlReplacementMap[newImages[i]]) {
          newImages[i] = urlReplacementMap[newImages[i]];
          updated = true;
        }
      }
      let demoUrl = p.demoVideoUrl;
      if (demoUrl && urlReplacementMap[demoUrl]) {
        demoUrl = urlReplacementMap[demoUrl];
        updated = true;
      }
      if (updated) {
        await prisma.product.update({
          where: { id: p.id },
          data: { images: newImages, demoVideoUrl: demoUrl },
        });
        console.log(`Updated Product DB record: ${p.name}`);
      }
    }

    // Check MediaAssets
    const mediaAssets = await prisma.mediaAsset.findMany();
    for (const m of mediaAssets) {
      if (m.thumbnail && urlReplacementMap[m.thumbnail]) {
        await prisma.mediaAsset.update({
          where: { id: m.id },
          data: { thumbnail: urlReplacementMap[m.thumbnail] },
        });
        console.log(`Updated MediaAsset DB record: ${m.id}`);
      }
    }

    // Check ProductAssets
    const productAssets = await prisma.productAsset.findMany();
    for (const pa of productAssets) {
      if (urlReplacementMap[pa.href]) {
        await prisma.productAsset.update({
          where: { id: pa.id },
          data: { href: urlReplacementMap[pa.href] },
        });
        console.log(`Updated ProductAsset DB record: ${pa.id}`);
      }
    }

    console.log('Database check complete.');
  } catch (err) {
    console.error('Database update error:', err);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

updateDatabase();
