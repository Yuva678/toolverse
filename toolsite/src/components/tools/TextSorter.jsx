'use client';
import { useState } from 'react';

export default function TextSorter() {
  const [text, setText] = useState('');
  const [order, setOrder] = useState('asc'); // asc, desc
  const [caseSensitive, setCaseSensitive] = useState(false);

  const handleSort = () => {
    let lines = text.split('\n').filter(l => l.trim() !== '');
    lines.sort((a, b) => {
      const valA = caseSensitive ? a : a.toLowerCase();
      const valB = caseSensitive ? b : b.toLowerCase();
      if (valA < valB) return order === 'asc' ? -1 : 1;
      if (valA > valB) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setText(lines.join('\n'));
  };

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>List of lines to sort</label>
      <textarea 
        className="textarea-field" 
        rows="10" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Zebra&#10;Apple&#10;Monkey"
      ></textarea>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', alignItems: 'center' }}>
        <button className={order === 'asc' ? 'btn btn-sm' : 'btn btn-secondary btn-sm'} onClick={() => setOrder('asc')}>A to Z</button>
        <button className={order === 'desc' ? 'btn btn-sm' : 'btn btn-secondary btn-sm'} onClick={() => setOrder('desc')}>Z to A</button>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }}>
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
          Case Sensitive
        </label>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn" onClick={handleSort}>⚡ Sort Lines</button>
        <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(text)}>📋 Copy</button>
        <button className="btn btn-secondary" onClick={() => setText('')}>🗑️ Clear</button>
      </div>
    </div>
  );
}
