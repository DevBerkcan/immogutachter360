import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.immogutachter360.de',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://www.immogutachter360.de/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        if (item.url.includes('/leistungen/') || item.url.includes('/immobiliengutachter-')) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        if (item.url.includes('/blog/') || item.url === 'https://www.immogutachter360.de/faq') {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        if (item.url.includes('/leistungen') || item.url.includes('/ratgeber')) {
          return { ...item, priority: 0.85, changefreq: 'weekly' };
        }
        return item;
      },
      filter: (page) => !page.includes('/api/') && !page.includes('/_astro/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: { prefetchAll: true },
  build: { inlineStylesheets: 'auto' },
});
