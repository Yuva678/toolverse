import { blogData, getArticleBySlug } from '@/data/blogData';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Article Not Found' };
  
  return {
    title: `${article.title} — ToolVerse Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    }
  };
}

export function generateStaticParams() {
  return blogData.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h1>Article Not Found</h1>
        <Link href="/blog" className="btn" style={{ marginTop: '2rem' }}>Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="container" style={{ maxWidth: '800px', padding: '4rem 24px' }}>
      <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-block', marginBottom: '2rem' }}>&larr; Back to all articles</Link>
      
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.2 }}>{article.title}</h1>
        <div style={{ color: 'var(--text-muted)', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <span>📅 {article.date}</span>
          <span>✍️ By {article.author}</span>
        </div>
      </header>

      <div className="ad-unit ad-leaderboard">Advertisement (AdSense)</div>

      <div className="prose" style={{ marginTop: '3rem' }}>
        {article.content.map((block, idx) => {
          if (block.type === 'h2') return <h2 key={idx} style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '2rem' }}>{block.text}</h2>;
          if (block.type === 'h3') return <h3 key={idx} style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-main)', fontSize: '1.5rem' }}>{block.text}</h3>;
          if (block.type === 'p') return <p key={idx} style={{ marginBottom: '1.2rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>{block.text}</p>;
          if (block.type === 'ul') return (
            <ul key={idx} style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              {block.items.map((li, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{li}</li>)}
            </ul>
          );
          return null;
        })}
      </div>

      <div className="ad-unit ad-leaderboard" style={{ marginTop: '4rem' }}>Advertisement (AdSense)</div>
    </article>
  );
}
