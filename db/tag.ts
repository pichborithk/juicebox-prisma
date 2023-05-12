import { db } from '.';

export async function createTags(tagList: string[]) {
  if (tagList.length <= 0) return [];
  const tags = await Promise.all(
    tagList.map(async tag => {
      const existingTag = await db.tag.findUnique({ where: { name: tag } });
      if (existingTag) {
        return existingTag;
      } else {
        return await db.tag.create({
          data: { name: tag },
        });
      }
    })
  );

  return tags;
}
