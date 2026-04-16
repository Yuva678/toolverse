'use client';
import { useState } from 'react';

export default function RandomNumber() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [results, setResults] = useState([]);

  const generate = () => {
    const minNum = parseInt(min) || 0;
    const maxNum = parseInt(max) || 100;
    const c = parseInt(count) || 1;
    
    if (minNum >= maxNum) {
      alert('Min must be less than Max');
      return;
    }

    const newResults = [];
    for (let i = 0; i < Math.min(c, 1000); i++) {
        newResults.push(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
    setResults(newResults);
  };

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Min Value</label>
          <input type="number" className="input-field" value={min} onChange={(e) => setMin(e.target.value)} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Max Value</label>
          <input type="number" className="input-field" value={max} onChange={(e) => setMax(e.target.value)} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>How Many?</label>
          <input type="number" className="input-field" min="1" max="1000" value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
      </div>

      <button className="btn" onClick={generate} style={{ width: '100%', marginBottom: '1.5rem' }}>⚡ Generate Random Numbers</button>

      {results.length > 0 && (
        <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Results</h3>
          <div style={{ 
            display: 'flex', flexWrap: 'wrap', gap: '0.5rem', 
            maxHeight: '200px', overflowY: 'auto'
          }}>
            {results.map((r, i) => (
              <span key={i} style={{ 
                background: 'var(--primary)', color: 'white', 
                padding: '0.3rem 0.6rem', borderRadius: '4px', 
                fontWeight: 600, fontSize: '1.2rem' 
              }}>
                {r}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
