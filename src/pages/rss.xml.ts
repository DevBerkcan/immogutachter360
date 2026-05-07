import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '~/lib/site';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('blog');
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/blog/${p.id.replace(/\.mdx?$/, '')}/`,
    })),
  });
}
