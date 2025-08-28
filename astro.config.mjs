import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cavazosanalytics.github.io',
  base: '/',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  vite: { server: { port: 4321 } }
});
