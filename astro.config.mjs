import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.immogutachter360.de',
  output: 'static',
  // Düsseldorf = Startseite; Umland auf echte Einsatzorte reduziert
  redirects: {
    '/immobiliengutachter-duesseldorf': { status: 301, destination: '/' },
    '/immobiliengutachter-krefeld': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-moenchengladbach': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-duisburg': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-essen': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-wuppertal': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-bochum': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-dortmund': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-oberhausen': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-koeln': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-solingen': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-remscheid': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-leverkusen': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-bergisch-gladbach': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-velbert': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-muelheim-an-der-ruhr': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-hagen': { status: 301, destination: '/einzugsgebiet' },
    '/immobiliengutachter-bottrop': { status: 301, destination: '/einzugsgebiet' },
  },
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
    // Dev: react-dom/client wird sonst nicht vorgebündelt → "does not provide an export named 'createRoot'"
    optimizeDeps: { include: ['react-dom/client'] },
  },
  prefetch: { prefetchAll: true },
  build: { inlineStylesheets: 'auto' },
});
