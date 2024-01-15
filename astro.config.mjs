import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/static';

// https://astro.build/config
export default defineConfig({
  site: "https://www.sadko.fi",
  server: {
    host: true
  },
  compressHTML: true,
  output: 'server',
  adapter: netlify({
    cacheOnDemandPages: true,
    imageCDN: false
  }),
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
