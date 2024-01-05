import { defineCollection, z } from 'astro:content';

import { home } from '../schemas/home';
const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({...home})
});
// const heroCollection = defineCollection({
//   type: 'content',
//   schema: z.object({...hero})
// });


// // const seoCollection = defineCollection({
// //   type: 'content',
// //   schema: z.object({...seo})
// // });

// const heroCollection = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     // date: z.date(),
//   }),
// });


export const collections = {
  // seo: seoCollection,
  home: homeCollection,
};
