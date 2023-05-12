import { Post, postList, userList } from './dummy.data';
import { UserData, createUser, db, createPost } from '.';

async function createInitialUsers(users: UserData[]) {
  // await db.user.deleteMany();
  return await Promise.all(users.map(user => createUser(user)));
}

// async function createInitialPosts(posts: Post[]) {
//    await db.post.deleteMany();
//   const users = await db.user.findMany();

//   const postsData = posts.map((post, index) => {
//     return { ...post, authorId: users[index].id };
//   });

//   await Promise.all(postsData.map(post => createPost(post)));
//   return;
// }

async function seed() {
  const users = await createInitialUsers(userList);
  // users.forEach(user => console.log(user));
  // await createInitialPosts(postList);
  await createPost({ ...postList[0], authorId: users[0].id });
  await createPost({ ...postList[1], authorId: users[1].id });
  await createPost({ ...postList[2], authorId: users[2].id });

  // await db.tag.deleteMany();
}

seed().catch(error => console.error(error));
