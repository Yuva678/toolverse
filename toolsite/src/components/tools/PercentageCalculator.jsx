'use client';
import { useState } from 'react';

export default function PercentageCalculator() {
  const [v1, setV1] = useState(15);
  const [v2, setV2] = useState(150);
  
  const p1 = (parseFloat(v1) / 100) * parseFloat(v2);
  const p2 = (parseFloat(v1) / parseFloat(v2)) * 100;
  const p3 = ((parseFloat(v2) - parseFloat(v1)) / Math.abs(parseFloat(v1))) * 100;

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Basic Manipulations</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Calc 1 */}
        <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          What is <input type="number" style={{ width: '80px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }} value={v1} onChange={e => setV1(e.target.value)} /> % 
          of <input type="number" style={{ width: '100px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }} value={v2} onChange={e => setV2(e.target.value)} /> ?
          
          <div style={{ marginLeft: 'auto', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
            = {!isNaN(p1) ? p1.toFixed(2) : '---'}
          </div>
        </div>

        {/* Calc 2 */}
        <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <input type="number" style={{ width: '100px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }} value={v1} onChange={e => setV1(e.target.value)} />
          is what percent of
          <input type="number" style={{ width: '100px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }} value={v2} onChange={e => setV2(e.target.value)} /> ?
          
          <div style={{ marginLeft: 'auto', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
             = {!isNaN(p2) ? p2.toFixed(2) : '---'} %
          </div>
        </div>

        {/* Calc 3 */}
        <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          Percentage increase/decrease from 
          <input type="number" style={{ width: '100px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }} value={v1} onChange={e => setV1(e.target.value)} />
          to
          <input type="number" style={{ width: '100px', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }} value={v2} onChange={e => setV2(e.target.value)} /> ?
          
          <div style={{ marginLeft: 'auto', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
             = {!isNaN(p3) ? (p3 > 0 ? '+' : '') + p3.toFixed(2) : '---'} %
          </div>
        </div>
      </div>
    </div>
  );
}
