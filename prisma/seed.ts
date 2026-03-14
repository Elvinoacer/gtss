import { PrismaClient, Role } from '../src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';
import bcrypt from 'bcryptjs';

import { productsList, productFeatures, productHealthMetrics, productAssets } from '../data/products';
import { leadsList } from '../data/leads';
import { customersList } from '../data/customers';
import { membersList } from '../data/teams';
import { qrCodesList } from '../data/qr';
import { ticketsList } from '../data/support';
import { mediaAssetsList } from '../data/media';
import { docContentData, docErrorCodes } from '../data/docs';


const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting seed...');

  // Clear existing data
  await prisma.productFeature.deleteMany();
  await prisma.productHealthMetric.deleteMany();
  await prisma.productAsset.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.ticketActivity.deleteMany();
  await prisma.ticketAttachment.deleteMany();
  await prisma.ticket.deleteMany();
  await prisma.product.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.qRCode.deleteMany();
  await prisma.mediaAsset.deleteMany();
  await prisma.mediaAsset.deleteMany();
  await prisma.mediaAsset.deleteMany();
  await prisma.deployment.deleteMany();
  await prisma.docErrorCode.deleteMany();
  await prisma.doc.deleteMany();
  await prisma.docErrorCode.deleteMany();
  await prisma.doc.deleteMany();

  console.log('Cleared existing data.');

  // Seed Products
  for (const p of productsList) {
    await prisma.product.create({
      data: {
        id: p.id,
        name: p.name,
        productId: p.productId,
        category: p.category,
        pricing: p.pricing,
        status: p.status,
        icon: p.icon,
        iconColor: p.iconColor,
        features: {
          create: productFeatures.map(f => ({
            icon: f.icon,
            iconColor: f.iconColor,
            title: f.title,
            description: f.description,
          })),
        },
        health: {
          create: productHealthMetrics.map(h => ({
            label: h.label,
            value: h.value,
            percentage: h.percentage,
            color: h.color,
          })),
        },
        assets: {
          create: productAssets.map(a => ({
            type: a.type,
            title: a.title,
            subtitle: a.subtitle,
            href: a.href,
          })),
        },
      },
    });
  }
  console.log('Seeded products.');

  // Seed Leads
  for (const l of leadsList) {
    await prisma.lead.create({
      data: {
        id: l.id,
        name: l.name,
        role: l.role,
        email: l.email,
        phone: l.phone,
        productInterest: l.productInterest,
        status: l.status,
        assignedRep: l.assignedRep?.name,
        avatar: l.avatar,
      },
    });
  }
  console.log('Seeded leads.');

  // Seed Customers
  for (const c of customersList) {
    await prisma.customer.create({
      data: {
        id: c.id,
        customerId: c.customerId,
        name: c.name,
        email: c.email,
        phone: c.phone,
        location: c.location,
        status: c.status,
        avatar: c.avatar,
      },
    });
  }
  console.log('Seeded customers.');

  // Seed Transactions
  console.log('Seeding transactions...');
  const customers = await prisma.customer.findMany();
  const statuses = ['Completed', 'Pending', 'Failed', 'Closed Won', 'Negotiation', 'Proposal Sent'];
  const products = ['Enterprise License Q3', 'Cloud Migration Service', 'Platform Audit', 'SaaS Renewal 2024', 'Consulting Package'];

  for (const customer of customers) {
    // Create 1-3 transactions per customer
    const numTransactions = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numTransactions; i++) {
        await prisma.transaction.create({
            data: {
                customerId: customer.id,
                amount: Math.floor(Math.random() * 50000) + 5000,
                status: statuses[Math.floor(Math.random() * statuses.length)],
                product: products[Math.floor(Math.random() * products.length)],
                date: new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 60)), // Last 60 days
            }
        });
    }
  }
  console.log('Seeded transactions.');

  // Seed Team Members
  for (const m of membersList) {
    await prisma.teamMember.create({
      data: {
        id: m.id,
        name: m.name,
        role: m.role,
        email: m.email,
        team: m.team,
        status: m.status,
        joinDate: m.joinDate,
        avatar: m.avatar,
      },
    });
  }
  console.log('Seeded team members.');

  // Seed QR Codes
  for (const qr of qrCodesList) {
    await prisma.qRCode.create({
      data: {
        id: qr.id,
        name: qr.name,
        url: qr.url,
        product: qr.product,
        type: qr.type,
        typeColor: qr.typeColor,
        qrThumbnail: qr.qrThumbnail,
      },
    });
  }
  console.log('Seeded QR codes.');

  // Seed Tickets
  for (const t of ticketsList) {
    await prisma.ticket.create({
      data: {
        ticketNumber: t.id,
        subject: t.subject,
        customer: t.customer,
        status: t.status,
        priority: t.priority,
        assigneeName: t.assignee?.name,
        assigneeAvatar: t.assignee?.avatar,
      },
    });
  }
  console.log('Seeded tickets.');

  // Seed Media Assets
  for (const m of mediaAssetsList) {
    await prisma.mediaAsset.create({
      data: {
        id: m.id,
        title: m.title,
        type: m.type,
        size: m.size,
        thumbnail: m.thumbnail,
      },
    });
  }
  console.log('Seeded media assets.');

  // Seed Docs
  await prisma.doc.create({
    data: {
      title: docContentData.title,
      content: docContentData.content,
      version: docContentData.version,
      errorCodes: {
        create: docErrorCodes.map(ec => ({
          code: ec.code,
          description: ec.description,
          resolution: ec.resolution,
        })),
      },
    },
  });
  console.log('Seeded docs.');

  // Seed Docs
  await prisma.doc.create({
    data: {
      title: docContentData.title,
      content: docContentData.content,
      version: docContentData.version,
      errorCodes: {
        create: docErrorCodes.map(ec => ({
          code: ec.code,
          description: ec.description,
          resolution: ec.resolution,
        })),
      },
    },
  });
  console.log('Seeded docs.');

  console.log('Seeded docs.');

  // Seed Admin User
  const adminEmail = 'admin@gtss.com';
  const plainAdminPassword = 'adminpassword';
  const adminPassword = await bcrypt.hash(plainAdminPassword, 12);

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: adminPassword,
        role: Role.ADMIN,
        name: 'Admin User',
      },
    });
    console.log('Admin user created');
  } else {
    console.log('Admin user already exists');
  }

  console.log('Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
