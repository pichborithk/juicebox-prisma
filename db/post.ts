import { connect } from 'http2';
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
        some: {
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

type UpdatePostData = {
  title?: string;
  content?: string;
  tags?: string[];
};

export async function updatePost(postId: number, postData: UpdatePostData) {
  const { tags } = postData;
  let tagReferenceList: { id: number }[] = [];
  if (tags && tags.length > 0) {
    const tagList = await createTags(tags!);
    tagReferenceList = tagList.map(tag => {
      return { id: tag.id };
    });
  }
  const data = {
    ...postData,
    tags: { set: tagReferenceList },
  };

  return await db.post.update({
    where: { id: postId },
    data: data,
    include: { tags: true },
  });
}
