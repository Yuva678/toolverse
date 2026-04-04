'use client';
import { useState } from 'react';

export default function CaseConverter() {
  const [text, setText] = useState('');

  const toTitleCase = (str) => {
    return str.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };

  const toSentenceCase = (str) => {
    return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
  };

  const toAlternatingCase = (str) => {
    return str.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
  };

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Input Text</label>
      <textarea 
        className="textarea-field" 
        rows="8" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text to convert..."
      ></textarea>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <button className="btn btn-secondary" onClick={() => setText(text.toUpperCase())}>UPPERCASE</button>
        <button className="btn btn-secondary" onClick={() => setText(text.toLowerCase())}>lowercase</button>
        <button className="btn btn-secondary" onClick={() => setText(toTitleCase(text))}>Title Case</button>
        <button className="btn btn-secondary" onClick={() => setText(toSentenceCase(text))}>Sentence case.</button>
        <button className="btn btn-secondary" onClick={() => setText(toAlternatingCase(text))}>aLtErNaTiNg cAsE</button>
        <button className="btn btn-secondary" onClick={() => setText(text.split(/[ \t]+/).join('-'))}>kebab-case</button>
        <button className="btn btn-secondary" onClick={() => setText(text.split(/[ \t]+/).join('_'))}>snake_case</button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn" onClick={() => navigator.clipboard.writeText(text)}>📋 Copy Output</button>
        <button className="btn btn-secondary" onClick={() => setText('')}>🗑️ Clear</button>
      </div>
    </div>
  );
}
