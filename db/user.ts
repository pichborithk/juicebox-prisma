import { Prisma } from '@prisma/client';
import { db } from '.';

export type UserData = {
  username: string;
  password: string;
  name: string;
  location: string;
};

export async function createUser(data: Prisma.userCreateInput) {
  const user = await db.user.create({
    data: data,
  });

  return user;
}

export async function getAllUsers() {
  const users = await db.user.findMany({
    select: {
      id: true,
      username: true,
      name: true,
      location: true,
      active: true,
    },
  });

  return users;
}

export async function getUserById(userId: number) {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
}

export async function updateUser(userId: number, data: UserData) {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: data,
  });

  return user;
}
