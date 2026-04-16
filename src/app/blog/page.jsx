import { blogData } from '@/data/blogData';
import Link from 'next/link';

export const metadata = {
  title: 'Blog — ToolVexa',
  description: 'Read the latest articles about productivity, student tools, web development, and browser mechanics.',
};

export default function BlogIndexPage() {
  return (
    <div className="container" style={{ padding: '6rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>The ToolVexa Blog</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>
          Discover tips, guides, and insights to maximize your digital productivity.
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {blogData.map(article => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>{article.title}</h2>
            <p style={{ color: 'var(--text-muted)', flexGrow: 1, marginBottom: '1.5rem' }}>{article.excerpt}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <span>{article.date}</span>
              <span style={{ fontWeight: 600, color: 'var(--secondary)' }}>Read Article &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
