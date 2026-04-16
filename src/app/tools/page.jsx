import { toolsData } from '@/data/toolsData';
import Link from 'next/link';

export const metadata = {
  title: 'All Free Tools Directory — ToolVexa',
  description: 'Browse our complete directory of 15+ free online browser tools. Categories include Text formatting, Images, Developer algorithms, and Student utilities.',
};

export default function AllToolsPage() {
  return (
    <div className="container" style={{ padding: '6rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Tools Directory</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Explore our complete repository of 15+ high-quality utilities. Click on any tool below to launch it instantly in your browser.
        </p>
      </div>

      <div className="grid grid-cols-3">
        {toolsData.map(tool => (
          <Link key={tool.id} href={`/tools/${tool.slug}`} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
               <span className="card-icon">{tool.icon}</span>
               <span style={{ fontSize: '0.8rem', background: 'var(--border)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{tool.category}</span>
            </div>
            <h3 className="card-title">{tool.title}</h3>
            <p className="card-desc" style={{ flexGrow: 1 }}>{tool.shortDesc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
