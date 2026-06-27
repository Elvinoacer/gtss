'use server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { Role } from '@/prisma/generated/client'

export async function registerUser(data: {
  firstName: string; lastName: string; email: string; password: string; department: string;
}) {
  const existing = await prisma.user.findUnique({ where: { email: data.email } })
  if (existing) return { success: false, error: 'Email already registered' }

  const hashed = await bcrypt.hash(data.password, 12)
  await prisma.user.create({
    data: {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: hashed,
      // Defaulting new registered internal users to TEAM role. Adjust as necessary.
      role: Role.TEAM, 
    }
  })
  return { success: true }
}
