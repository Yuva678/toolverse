'use client';
import { useState } from 'react';

export default function TextRepeater() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(10);
  const [separator, setSeparator] = useState('space');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    let sepStr = '';
    if (separator === 'space') sepStr = ' ';
    if (separator === 'newline') sepStr = '\n';
    if (separator === 'none') sepStr = '';

    const arr = [];
    for(let i=0; i<Math.min(count, 10000); i++) arr.push(text);
    setOutput(arr.join(sepStr));
  };

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 150px 150px', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>String to repeat</label>
          <input type="text" className="input-field" value={text} onChange={(e) => setText(e.target.value)} placeholder="Hello" style={{ marginBottom: 0 }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Count</label>
          <input type="number" className="input-field" value={count} onChange={(e) => setCount(e.target.value)} min="1" max="10000" style={{ marginBottom: 0 }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Separator</label>
          <select className="input-field" value={separator} onChange={(e) => setSeparator(e.target.value)} style={{ marginBottom: 0 }}>
             <option value="space">Space</option>
             <option value="newline">New Line</option>
             <option value="none">None</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button className="btn" onClick={handleGenerate}>⚡ Generate Text</button>
      </div>

      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Output</label>
      <textarea 
        className="textarea-field" 
        rows="8" 
        value={output}
        readOnly
        style={{ background: 'var(--card-bg)' }}
      ></textarea>
      
      {output && (
        <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(output)}>📋 Copy Output</button>
      )}
    </div>
  );
}
