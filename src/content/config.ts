import { defineCollection, z } from 'astro:content';

import { hero } from '../schemas/home';
const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({...hero})
});

// const homeCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     // date: z.date(),
//   }),
// });

export const collections = {
  // hero: heroCollection,
  home: homeCollection,
};
