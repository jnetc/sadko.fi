import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // output: 'hybrid',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'fi'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
