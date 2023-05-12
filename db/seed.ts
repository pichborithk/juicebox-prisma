import { postList, userList } from './dummy.data';
import {
  UserData,
  createUser,
  db,
  createPost,
  getAllUsers,
  getAllPosts,
  getPostById,
} from '.';

async function seed() {
  // await db.user.deleteMany();
  const users = await Promise.all(userList.map(user => createUser(user)));

  await createPost({
    ...postList[0],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });
  await createPost({
    ...postList[1],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });
  await createPost({
    ...postList[2],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });
  await createPost({
    ...postList[3],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });
  await createPost({
    ...postList[4],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });
  await createPost({
    ...postList[5],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });
  await createPost({
    ...postList[6],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });
  await createPost({
    ...postList[7],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });
  await createPost({
    ...postList[8],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });
  await createPost({
    ...postList[9],
    authorId: users[Math.floor(Math.random() * users.length)].id,
  });

  // await Promise.all(
  //   postList.map(post =>
  //     createPost({
  //       ...post,
  //       authorId: users[Math.floor(Math.random() * users.length)].id,
  //     })
  //   )
  // );
  // await db.tag.deleteMany();

  // console.log(users)
}

// seed().catch(error => console.error(error));

async function testDB() {
  const posts = await getPostById(2);
  console.log(posts);
}

testDB().catch(error => console.error(error));
