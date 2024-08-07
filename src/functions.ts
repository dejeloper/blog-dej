import type { CollectionEntry } from "astro:content";

export const sortBlogPosts = (
  posts: CollectionEntry<"blog">[] | null
): CollectionEntry<"blog">[] => {
  if (!posts) return [];
  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
};

export const excludeDrafts = ({ data }: CollectionEntry<"blog">): boolean => {
  return import.meta.env.PROD ? true : true;
};
