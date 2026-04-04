'use client';
import { useState } from 'react';

export default function RemoveDuplicateLines() {
  const [text, setText] = useState('');

  const handleRemove = () => {
    const lines = text.split('\n');
    const uniqueLines = [...new Set(lines)];
    setText(uniqueLines.join('\n'));
  };

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Input Text with Duplicate Lines</label>
      <textarea 
        className="textarea-field" 
        rows="10" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Line 1&#10;Line 2&#10;Line 1"
      ></textarea>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn" onClick={handleRemove}>⚡ Remove Duplicates</button>
        <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(text)}>📋 Copy</button>
        <button className="btn btn-secondary" onClick={() => setText('')}>🗑️ Clear</button>
      </div>
    </div>
  );
}
