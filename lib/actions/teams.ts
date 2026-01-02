'use server';

import { prisma } from '@/lib/prisma';

export async function getTeamMembers() {
  try {
    const members = await prisma.teamMember.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, data: members };
  } catch (error) {
    console.error('Error fetching team members:', error);
    return { success: false, error: 'Failed to fetch team members' };
  }
}

export async function getTeamMemberById(id: string) {
  try {
    const member = await prisma.teamMember.findUnique({
      where: { id },
    });
    return { success: true, data: member };
  } catch (error) {
    console.error('Error fetching team member:', error);
    return { success: false, error: 'Failed to fetch team member' };
  }
}
export async function createTeamMember(data: any) {
  try {
    const member = await prisma.teamMember.create({
      data: {
        name: data.name,
        role: data.role,
        email: data.email,
        bio: data.bio,
        portfolioUrl: data.portfolioUrl,
        twitterUrl: data.twitterUrl,
        linkedinUrl: data.linkedinUrl,
        joinDate: data.joinDate,
        team: data.team,
        avatar: data.avatar,
        status: 'active',
      },
    });
    return { success: true, data: member };
  } catch (error) {
    console.error('Error creating team member:', error);
    return { success: false, error: 'Failed to create team member' };
  }
}

export async function updateTeamMember(id: string, data: any) {
  try {
    const member = await prisma.teamMember.update({
      where: { id },
      data: {
        name: data.name,
        role: data.role,
        email: data.email,
        bio: data.bio,
        portfolioUrl: data.portfolioUrl,
        twitterUrl: data.twitterUrl,
        linkedinUrl: data.linkedinUrl,
        joinDate: data.joinDate,
        team: data.team,
        avatar: data.avatar,
      },
    });
    return { success: true, data: member };
  } catch (error) {
    console.error('Error updating team member:', error);
    return { success: false, error: 'Failed to update team member' };
  }
}
export async function deleteTeamMember(id: string) {
  try {
    await prisma.teamMember.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error('Error deleting team member:', error);
    return { success: false, error: 'Failed to delete team member' };
  }
}
