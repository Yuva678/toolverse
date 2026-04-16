'use client';
import { useState, useEffect } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({ words: 0, chars: 0, noSpace: 0, sents: 0, paras: 0, read: 0 });

  useEffect(() => {
    const tr = text.trim();
    const words = tr ? tr.split(/\s+/).filter(Boolean).length : 0;
    const sents = tr ? (tr.match(/[.!?]+(\s|$)/g)||[]).length || (tr?1:0) : 0;
    const paras = tr ? tr.split(/\n\s*\n/).filter(p=>p.trim()).length || 1 : 0;
    const mins  = Math.ceil(words/200);

    setStats({
      words,
      chars: text.length,
      noSpace: text.replace(/\s/g,'').length,
      sents,
      paras: tr ? paras : 0,
      read: words < 1 ? '0 min' : (mins < 1 ? '<1 min' : mins + ' min')
    });
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  return (
    <div className="tool-box" style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Your Text</label>
      <textarea 
        className="textarea-field" 
        rows="10" 
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
        <div className="s-badge" style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>{stats.words.toLocaleString()}</div>
          <div style={{ color: 'var(--text-muted)' }}>Words</div>
        </div>
        <div className="s-badge" style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>{stats.chars.toLocaleString()}</div>
          <div style={{ color: 'var(--text-muted)' }}>Characters</div>
        </div>
        <div className="s-badge" style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>{stats.sents.toLocaleString()}</div>
          <div style={{ color: 'var(--text-muted)' }}>Sentences</div>
        </div>
        <div className="s-badge" style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>{stats.paras.toLocaleString()}</div>
          <div style={{ color: 'var(--text-muted)' }}>Paragraphs</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn btn-secondary" onClick={() => setText('')}>🗑️ Clear Text</button>
        <button className="btn" onClick={handleCopy}>📋 Copy Text</button>
      </div>
    </div>
  );
}
