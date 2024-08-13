import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// Что предотвратить ошибку с развертыванием через netlify CLI deploy
// Не подключаем сразу к netlify через GitHUb!!! Если надо заливать через CLI
// Сначало подключаем, инициализируем и заливаем через сам netlify CLI,
// а потом уже можно и через GitHub или CLI

// https://astro.build/config
export default defineConfig({
	site: "https://sadko.fi",
	server: {
		host: true,
	},
	output: "server",
	adapter: netlify(),
	build: {
		inlineStylesheets: "always",
	},
	image: {
		service: {
			entrypoint: "astro/assets/services/noop",
		},
	},
	i18n: {
		defaultLocale: "ru",
		locales: ["ru", "fi"],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	devToolbar: { enabled: false },
	integrations: [
		sitemap({
			changefreq: "weekly",
			priority: 0.8,
			lastmod: new Date(),
			customPages: [
				"https://sadko.fi/ru/",
				"https://sadko.fi/fi/",
				"https://sadko.fi/ru/camps/",
				"https://sadko.fi/fi/camps/",
				"https://sadko.fi/ru/celebrations/",
				"https://sadko.fi/fi/celebrations/",
				"https://sadko.fi/ru/clubs/",
				"https://sadko.fi/fi/clubs/",
				"https://sadko.fi/ru/concerts/",
				"https://sadko.fi/fi/concerts/",
				"https://sadko.fi/ru/courses/",
				"https://sadko.fi/fi/courses/",
				"https://sadko.fi/ru/festivals/",
				"https://sadko.fi/fi/festivals/",
				"https://sadko.fi/ru/masters/",
				"https://sadko.fi/fi/masters/",
				"https://sadko.fi/ru/parents/",
				"https://sadko.fi/fi/parents/",
				"https://sadko.fi/ru/projects/",
				"https://sadko.fi/fi/projects/",
				"https://sadko.fi/ru/travels/",
				"https://sadko.fi/fi/travels/",
				"https://sadko.fi/ru/events/",
				"https://sadko.fi/fi/events/",
				"https://sadko.fi/ru/blanks/",
				"https://sadko.fi/fi/blanks/",
				"https://sadko.fi/ru/rules-and-payments/",
				"https://sadko.fi/fi/rules-and-payments/",
				"https://sadko.fi/ru/schedule/",
				"https://sadko.fi/fi/schedule/",
				"https://sadko.fi/ru/articles/",
				"https://sadko.fi/fi/articles/",
				"https://sadko.fi/ru/about/",
				"https://sadko.fi/fi/about/",
				"https://sadko.fi/fi/feedbacks/",
				"https://sadko.fi/ru/feedbacks/",
				"https://sadko.fi/ru/teachers/",
				"https://sadko.fi/fi/teachers/",
				"https://sadko.fi/ru/gallery/",
				"https://sadko.fi/fi/gallery/",
				"https://sadko.fi/ru/membership/",
				"https://sadko.fi/fi/membership/",
			],
			// i18n: {
			//   defaultLocale: 'ru',
			//   locales: {
			//     ru: 'ru',
			//     fi: 'fi',
			//   },
			// }
		}),
	],
});
