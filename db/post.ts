import { createTags, db } from '.';

export type PostData = {
  authorId: number;
  title: string;
  content: string;
  tags: string[];
};

export async function createPost(postData: PostData) {
  const { authorId, title, content, tags } = postData;
  const tagList = await createTags(tags);
  const tagReferenceList = tagList.map(tag => {
    return { id: tag.id };
  });

  const post = await db.post.create({
    data: {
      authorId,
      title,
      content,
      tags: {
        connect: tagReferenceList,
      },
    },
    include: {
      tags: true,
    },
  });

  console.log(post);
  return post;
}

export async function getPostById(postId: number) {
  return await db.post.findUnique({
    where: { id: postId },
    include: {
      tags: true,
      user: true,
    },
  });
}

export async function getAllPosts() {
  return await db.post.findMany({
    include: {
      tags: true,
      user: true,
    },
  });
}

export async function getPostsByUser(userId: number) {
  return await db.post.findMany({
    where: { authorId: userId },
    include: {
      tags: true,
    },
  });
}

export async function getPostsByTagName(tagName: string) {
  return await db.post.findMany({
    where: {
      tags: {
        every: {
          name: tagName,
        },
      },
    },
    include: {
      tags: true,
      user: true,
    },
  });
}
