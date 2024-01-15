import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: "https://www.sadko.fi",
  server: { host: true },
  compressHTML: true,
  output: 'server',
  adapter: vercel({ functionPerRoute: true }),
  build: {
    inlineStylesheets: `always`,
  },
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'fi'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
