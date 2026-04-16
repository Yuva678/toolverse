import { toolsData, getToolBySlug } from '@/data/toolsData';
import SEOTextComponent from '@/components/SEOTextComponent';
import Link from 'next/link';

// Component Imports
import WordCounter from '@/components/tools/WordCounter';
import CaseConverter from '@/components/tools/CaseConverter';
import TextSorter from '@/components/tools/TextSorter';
import RemoveDuplicateLines from '@/components/tools/RemoveDuplicateLines';
import TextRepeater from '@/components/tools/TextRepeater';
import AgeCalculator from '@/components/tools/AgeCalculator';
import GpaCalculator from '@/components/tools/GpaCalculator';
import PercentageCalculator from '@/components/tools/PercentageCalculator';
import RandomNumber from '@/components/tools/RandomNumber';
import JsonFormatter from '@/components/tools/JsonFormatter';
import Base64Encoder from '@/components/tools/Base64Encoder';
import ImageToolsPlaceholder from '@/components/tools/ImageToolsPlaceholder';

export async function generateMetadata({ params }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) {
    return { title: 'Tool Not Found — ToolVexa' };
  }
  return {
    title: `${tool.title} — Free Online Tool | ToolVexa`,
    description: tool.shortDesc,
    keywords: [tool.title.toLowerCase(), 'free online ' + tool.title.toLowerCase(), 'toolvexa'],
  };
}

export function generateStaticParams() {
  return toolsData.map((tool) => ({
    slug: tool.slug,
  }));
}

export default function ToolPage({ params }) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h1>Tool Not Found</h1>
        <p>This tool is currently being upgraded or does not exist.</p>
        <Link href="/tools" className="btn" style={{ marginTop: '2rem' }}>Back to Tools</Link>
      </div>
    );
  }

  // Render the specific interactive component based on ID
  const ToolInterface = () => {
    switch (tool.id) {
      // Text
      case 'word-counter': return <WordCounter />;
      case 'case-converter': return <CaseConverter />;
      case 'text-sorter': return <TextSorter />;
      case 'remove-duplicate-lines': return <RemoveDuplicateLines />;
      case 'text-repeater': return <TextRepeater />;
      // Student
      case 'age-calculator': return <AgeCalculator />;
      case 'gpa-calculator': return <GpaCalculator />;
      case 'percentage-calculator': return <PercentageCalculator />;
      case 'random-number': return <RandomNumber />;
      // Dev
      case 'json-formatter': return <JsonFormatter />;
      case 'base64': return <Base64Encoder />;
      // Images
      case 'image-resizer':
      case 'image-compressor':
      case 'jpg-to-png':
      case 'png-to-jpg':
        return <ImageToolsPlaceholder mode={tool.title} />;
      default:
        return <div className="tool-box" style={{ background: 'var(--background)', padding: '2rem', textAlign: 'center', border: '1px solid var(--border)', borderRadius: '12px' }}><i>Tool Interface Building...</i></div>;
    }
  };

  return (
    <div className="container tool-pg-layout">
      {/* Main Left Column */}
      <div className="main-tool-area">
        <div className="tool-header">
          <Link href="/tools" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-block', marginBottom: '1rem' }}>&larr; Back to all tools</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>{tool.icon}</span>
            <div>
              <h1 style={{ margin: 0 }}>{tool.title}</h1>
              <span style={{ background: '#10B981', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>100% Free</span>
            </div>
          </div>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>{tool.shortDesc}</p>
        </div>

        {/* Ad Space */}
        <div className="ad-unit ad-leaderboard">Advertisement (AdSense 728x90)</div>

        {/* React Tool Component */}
        <div style={{ marginBottom: '3rem' }}>
          <ToolInterface />
        </div>

        {/* Ad Space */}
        <div className="ad-unit ad-leaderboard">Advertisement (AdSense 728x90)</div>

        {/* Heavy SEO Text */}
        <SEOTextComponent toolData={tool} />
      </div>

      {/* Right Sidebar */}
      <aside>
        <div className="ad-unit ad-square" style={{ marginBottom: '2rem' }}>Ad (300x250)</div>
        
        <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Related Tools</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {toolsData.filter(t => t.id !== tool.id && t.category === tool.category).slice(0, 4).map(t => (
              <Link key={t.id} href={`/tools/${t.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                <span>{t.icon}</span> {t.title}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
