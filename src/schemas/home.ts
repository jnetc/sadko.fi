import { z } from 'astro:content';
export const home =  {
    title: z.string(),
    description: z.string(),
    hero_label: z.string(),
    hero_title: z.string(),
    hero_description: z.string(),
    hero_primary_btn_name: z.string().max(20),
    hero_primary_btn_url: z.string().url(),
    hero_secondary_btn_name: z.string().max(20),
    hero_secondary_btn_url: z.string().url(),

    activity_title: z.string(),
    activity_description: z.string(),
    activities: z.array(z.object({
        icon: z.string(),
        image: z.string(),
        title: z.string(),
        description: z.string(),
    })),

    about_title: z.string(),
    about_text: z.string(),
    about_btn_name: z.string().max(20),
    about_btn_url: z.string().url(),
    about_we_have: z.array(z.object({
        number: z.number(),
        text: z.string(),
    })),

    offer_title:  z.string(),
    offer_description: z.string(),
    offer_btn_name: z.string().max(20),
    offer_btn_url: z.string().url(),

    galleria_images: z.array(z.string()),
    galleria_btn_name: z.string().max(20),
    galleria_btn_url: z.string()
}
