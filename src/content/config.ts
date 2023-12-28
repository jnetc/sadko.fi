import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // date: z.date(),
  }),
});

export const collections = {
  home: homeCollection,
};
