"use Server";

import prisma from "../prisma";

export async function getUserBYId(id: string) {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export async function updateUserAvatar(avatarUrl: string, userId: string) {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      avatarUrl: avatarUrl,
    },
  });
}
