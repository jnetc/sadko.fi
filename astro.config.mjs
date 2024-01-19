import { defineConfig } from 'astro/config';
import tunnel from "astro-tunnel";
import netlify from '@astrojs/netlify';

// Что предотвратить ошибку с развертыванием через netlify CLI deploy
// Не подключаем сразу к netlify через GitHUb!!! Если надо заливать через CLI
// Сначало подключаем, инициализируем и заливаем через сам netlify CLI,
// а потом уже можно и через GitHub или CLI

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
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
  integrations: [tunnel()]
});
