import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: "https://www.sadko.fi",
  server: {
    host: true
  },
  output: 'server',
  adapter: netlify(),
  build: {
    inlineStylesheets: `always`
  },
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'fi'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
