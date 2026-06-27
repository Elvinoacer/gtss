import { PrismaClient, Role } from "./generated/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import "dotenv/config";

import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const adminEmail = "admin@gtss.com";
  const rawPassword = "adminpassword";
  const hashedPassword = await bcrypt.hash(rawPassword, 10);

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        role: Role.ADMIN,
        name: "Admin User",
      },
    });
    console.log("Admin user created");
  } else {
    await prisma.user.update({
      where: { email: adminEmail },
      data: { password: hashedPassword },
    });
    console.log("Admin user password updated");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
