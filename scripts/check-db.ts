import { PrismaClient } from '../prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL!;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function checkDatabase() {
  console.log('Checking database tables for DigitalOcean URLs or screenshot references...');

  const products = await prisma.product.findMany();
  console.log(`Found ${products.length} products in DB.`);
  for (const p of products) {
    if (p.images.length > 0 || p.demoVideoUrl || p.qrCodeUrl || p.logoUrl) {
      console.log(`Product: ${p.name} (${p.productId})`);
      console.log('  images:', p.images);
      console.log('  demoVideoUrl:', p.demoVideoUrl);
      console.log('  qrCodeUrl:', p.qrCodeUrl);
      console.log('  logoUrl:', p.logoUrl);
    }
  }

  const mediaAssets = await prisma.mediaAsset.findMany();
  console.log(`Found ${mediaAssets.length} mediaAssets in DB.`);
  for (const m of mediaAssets) {
    console.log(`  MediaAsset ${m.id}: title=${m.title}, thumbnail=${m.thumbnail}`);
  }

  const productAssets = await prisma.productAsset.findMany();
  console.log(`Found ${productAssets.length} productAssets in DB.`);
  for (const pa of productAssets) {
    console.log(`  ProductAsset ${pa.id}: title=${pa.title}, href=${pa.href}`);
  }

  const qrCodes = await prisma.qRCode.findMany();
  console.log(`Found ${qrCodes.length} qrCodes in DB.`);
  for (const qr of qrCodes) {
    console.log(`  QRCode ${qr.id}: url=${qr.url}, qrThumbnail=${qr.qrThumbnail}`);
  }

  await prisma.$disconnect();
  await pool.end();
}

checkDatabase().catch(err => {
  console.error(err);
  process.exit(1);
});
