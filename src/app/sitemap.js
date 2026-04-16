import { toolsData } from '@/data/toolsData';
import { blogData } from '@/data/blogData';

export default function sitemap() {
  const baseUrl = 'https://toolvexa.com';

  // Core static pages
  const staticPages = [
    '',
    '/tools',
    '/blog',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Tool specific pages
  const toolPages = toolsData.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Blog pages
  const blogPages = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages, ...blogPages];
}
