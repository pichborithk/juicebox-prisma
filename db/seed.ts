import { db } from '.';
import { userList } from './dummy.data';
import { createUser } from './user';

async function seed() {
  await db.user.deleteMany();
  const users = await Promise.all(userList.map(user => createUser(user)));
  users.forEach(user => console.log(user));
}

seed().catch(error => console.error(error));
