import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'fi'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
