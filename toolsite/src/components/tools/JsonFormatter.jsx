'use client';
import { useState } from 'react';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('fmt'); // fmt, min, val
  const [indent, setIndent] = useState(2);
  const [msg, setMsg] = useState(null); // { type: 'success' | 'error', text: '' }
  const [stats, setStats] = useState(null);

  const getDepth = (o, d = 0) => {
    if (typeof o !== 'object' || o === null) return d;
    const vs = Array.isArray(o) ? o : Object.values(o);
    return vs.length ? Math.max(...vs.map(v => getDepth(v, d + 1))) : d;
  };

  const countKeys = (o) => {
    if (typeof o !== 'object' || o === null) return 0;
    let n = 0;
    (Array.isArray(o) ? o : Object.values(o)).forEach(v => { n++; n += countKeys(v); });
    return n;
  };

  const formatBytes = (b) => {
    if (b < 1024) return b + ' B';
    return (b / 1024).toFixed(1) + ' KB';
  };

  const processJSON = () => {
    setMsg(null);
    setStats(null);
    setOutput('');
    
    if (!input.trim()) {
      setMsg({ type: 'error', text: 'Please paste some JSON first.' });
      return;
    }

    let parsed;
    try {
      parsed = JSON.parse(input.trim());
    } catch (e) {
      setMsg({ type: 'error', text: `Invalid JSON: ${e.message}` });
      return;
    }

    if (mode === 'val') {
      setMsg({ type: 'success', text: 'Valid JSON! Your JSON is syntactically correct.' });
      return;
    }

    setMsg({ type: 'success', text: 'Valid JSON' });
    const indentStr = indent === 'tab' ? '\t' : parseInt(indent);
    const result = mode === 'min' ? JSON.stringify(parsed) : JSON.stringify(parsed, null, indentStr);
    
    setOutput(result);
    setStats({
      keys: countKeys(parsed),
      depth: getDepth(parsed),
      type: Array.isArray(parsed) ? 'Array' : (typeof parsed === 'object' ? 'Object' : typeof parsed),
      size: formatBytes(new Blob([result]).size)
    });
  };

  const loadExample = () => {
    setInput(JSON.stringify({
      "name": "ToolVerse",
      "version": "3.0",
      "free": true,
      "categories": ["Text", "Dev"],
      "tools": [
        { "id": "word-counter", "rating": 4.9 },
        { "id": "json-formatter", "rating": 4.8 }
      ],
      "stats": { "totalTools": 15 }
    }, null, 2));
    setMsg(null);
    setOutput('');
    setStats(null);
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setMsg(null);
    setStats(null);
  };

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        <button className={mode === 'fmt' ? 'btn' : 'btn btn-secondary'} onClick={() => setMode('fmt')}>✨ Format</button>
        <button className={mode === 'min' ? 'btn' : 'btn btn-secondary'} onClick={() => setMode('min')}>📦 Minify</button>
        <button className={mode === 'val' ? 'btn' : 'btn btn-secondary'} onClick={() => setMode('val')}>✅ Validate</button>
      </div>

      {mode === 'fmt' && (
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
          <span style={{ fontWeight: 600 }}>Indent:</span>
          <button className={indent === 2 ? 'btn btn-sm' : 'btn btn-secondary btn-sm'} onClick={() => setIndent(2)}>2 spaces</button>
          <button className={indent === 4 ? 'btn btn-sm' : 'btn btn-secondary btn-sm'} onClick={() => setIndent(4)}>4 spaces</button>
          <button className={indent === 'tab' ? 'btn btn-sm' : 'btn btn-secondary btn-sm'} onClick={() => setIndent('tab')}>Tab</button>
        </div>
      )}

      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Input JSON</label>
      <textarea 
        className="textarea-field" 
        rows="8" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='{"key": "value"}'
        style={{ fontFamily: 'monospace' }}
      ></textarea>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button className="btn" onClick={processJSON}>⚡ Process JSON</button>
        <button className="btn btn-secondary" onClick={loadExample}>📋 Load Example</button>
        <button className="btn btn-secondary" onClick={clearAll}>🗑️ Clear</button>
      </div>

      {msg && (
        <div style={{ padding: '1rem', borderRadius: '8px', marginBottom: '1rem', background: msg.type === 'error' ? '#FEE2E2' : '#D1FAE5', color: msg.type === 'error' ? '#991B1B' : '#065F46' }}>
          {msg.text}
        </div>
      )}

      {stats && (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}><strong>Keys:</strong> {stats.keys}</div>
          <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}><strong>Size:</strong> {stats.size}</div>
          <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}><strong>Depth:</strong> {stats.depth}</div>
          <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}><strong>Type:</strong> {stats.type}</div>
        </div>
      )}

      {output && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Output</label>
            <button className="btn btn-secondary" style={{ padding: '0.2rem 1rem' }} onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
          </div>
          <textarea 
            className="textarea-field" 
            rows="12" 
            value={output}
            readOnly
            style={{ background: 'var(--card-bg)', fontFamily: 'monospace' }}
          ></textarea>
        </>
      )}
    </div>
  );
}
