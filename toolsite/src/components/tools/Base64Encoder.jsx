'use client';
import { useState } from 'react';

export default function Base64Encoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('encode'); // encode or decode
  const [error, setError] = useState('');

  const processText = () => {
    setError('');
    try {
      if (mode === 'encode') {
        const encoded = btoa(unescape(encodeURIComponent(input)));
        setOutput(encoded);
      } else {
        const decoded = decodeURIComponent(escape(atob(input)));
        setOutput(decoded);
      }
    } catch (err) {
      setError('Invalid input format. Ensure you are providing a valid string for the operation.');
      setOutput('');
    }
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button 
          className={mode === 'encode' ? 'btn' : 'btn btn-secondary'} 
          onClick={() => setMode('encode')}
        >Mode: Encode</button>
        <button 
          className={mode === 'decode' ? 'btn' : 'btn btn-secondary'} 
          onClick={() => setMode('decode')}
        >Mode: Decode</button>
      </div>

      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Input Text</label>
      <textarea 
        className="textarea-field" 
        rows="5" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={mode === 'encode' ? 'Type pure text here to convert to Base64...' : 'Paste Base64 string here to decode...'}
      ></textarea>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button className="btn" onClick={processText}>⚡ Execute</button>
        <button className="btn btn-secondary" onClick={clearAll}>🗑️ Clear</button>
      </div>
      
      {error && <p style={{ color: '#EF4444', marginBottom: '1rem' }}>{error}</p>}

      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Output Result</label>
      <textarea 
        className="textarea-field" 
        rows="5" 
        value={output}
        readOnly
        placeholder="Output will appear here..."
        style={{ background: 'var(--card-bg)' }}
      ></textarea>
      
      {output && (
        <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(output)}>📋 Copy Output</button>
      )}
    </div>
  );
}
