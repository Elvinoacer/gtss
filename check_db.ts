
import 'dotenv/config';
import { prisma } from './lib/prisma';

async function main() {
  const count = await prisma.transaction.count();
  console.log(`Transaction count: ${count}`);
  
  const users = await prisma.user.count();
  console.log(`User count: ${users}`);

  const leads = await prisma.lead.count();
  console.log(`Lead count: ${leads}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
