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
        connect: [...tagReferenceList],
      },
    },
    include: {
      tags: true,
    },
  });

  console.log(post);
  return post;
}
