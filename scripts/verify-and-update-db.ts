import { PrismaClient } from '../prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL!;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function verifyAndUpdateDb() {
  console.log('--- Verifying Database Entries ---');

  // Load Cloudinary mapping
  const mappingPath = path.join(__dirname, '../cloudinary_mapping.json');
  let cloudinaryMap: Record<string, Record<string, string>> = {};
  if (fs.existsSync(mappingPath)) {
    cloudinaryMap = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
  }

  const adminUrls = Object.values(cloudinaryMap['admincenter'] || {});
  const clientUrls = Object.values(cloudinaryMap['clientimages'] || {});
  const waiterUrls = Object.values(cloudinaryMap['waiterscreens'] || {});

  const allCloudinaryUrls = [...adminUrls, ...clientUrls, ...waiterUrls];

  // 1. Check or update Restaurant Manager product in DB
  let restManager = await prisma.product.findFirst({
    where: {
      OR: [
        { name: { contains: 'Restaurant', mode: 'insensitive' } },
        { productId: { contains: 'RM', mode: 'insensitive' } }
      ]
    }
  });

  if (!restManager) {
    console.log('Creating Restaurant Manager product in database...');
    restManager = await prisma.product.create({
      data: {
        name: 'Restaurant Manager',
        productId: 'GTS-RM-01',
        category: 'Hospitality SaaS',
        pricing: 'Subscription',
        status: 'live',
        icon: 'restaurant',
        iconColor: 'bg-emerald-50 text-emerald-600',
        description: 'Complete offline-first POS, Waiter App, Kitchen Kanban, and Admin Analytics for modern restaurants & hotels.',
        images: allCloudinaryUrls.filter(u => !u.endsWith('.mp4')),
        demoVideoUrl: cloudinaryMap['waiterscreens']?.['waiterworkspace.mp4'] || '',
        logoUrl: cloudinaryMap['admincenter']?.['admin_menucategories1.png'] || '',
      }
    });
    console.log(`Created Restaurant Manager product with ID ${restManager.id}`);
  } else {
    console.log(`Found existing Restaurant Manager product ID: ${restManager.id}. Updating image URLs...`);
    await prisma.product.update({
      where: { id: restManager.id },
      data: {
        images: allCloudinaryUrls.filter(u => !u.endsWith('.mp4')),
        demoVideoUrl: cloudinaryMap['waiterscreens']?.['waiterworkspace.mp4'] || restManager.demoVideoUrl,
      }
    });
    console.log('Updated Restaurant Manager product images in DB.');
  }

  // 2. Check MediaAssets table
  const existingMedia = await prisma.mediaAsset.findMany();
  console.log(`DB has ${existingMedia.length} MediaAsset records.`);

  // Create MediaAssets for screenshots if not already present
  for (const [subfolder, map] of Object.entries(cloudinaryMap)) {
    for (const [filename, url] of Object.entries(map)) {
      const existing = await prisma.mediaAsset.findFirst({
        where: { title: filename }
      });
      if (!existing) {
        await prisma.mediaAsset.create({
          data: {
            title: filename,
            type: filename.endsWith('.mp4') ? 'video' : 'image',
            size: 'Cloudinary Hosted',
            thumbnail: url,
          }
        });
        console.log(`Added MediaAsset to DB: ${filename}`);
      } else if (existing.thumbnail !== url) {
        await prisma.mediaAsset.update({
          where: { id: existing.id },
          data: { thumbnail: url }
        });
        console.log(`Updated MediaAsset in DB: ${filename}`);
      }
    }
  }

  console.log('Database verification & sync complete.');
}

verifyAndUpdateDb()
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
