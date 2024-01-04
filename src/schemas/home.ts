import { z } from 'astro:content';
export const hero =  {
    title: z.string(),
    description: z.string(),
    hero_label: z.string(),
    hero_title: z.string(),
    hero_description: z.string(),
    hero_primary_btn_name: z.string(),
    hero_primary_btn_url: z.string(),
    hero_secondary_btn_name: z.string(),
    hero_secondary_btn_url: z.string(),
  }
