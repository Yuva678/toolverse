'use client';
import { useState } from 'react';

export default function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [end, setEnd] = useState(new Date().toISOString().split('T')[0]);
  const [result, setResult] = useState(null);

  const calculateAge = () => {
    if (!dob || !end) return;
    const d1 = new Date(dob);
    const d2 = new Date(end);
    
    if (d1 > d2) {
      setResult({ error: 'Start date cannot be after the end date.' });
      return;
    }

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();

    if (days < 0) {
      months--;
      // find days in the previous month
      const prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
    
    setResult({ years, months, days, totalDays });
  };

  return (
    <div style={{ background: 'var(--background)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Date of Birth (Start)</label>
          <input 
            type="date" 
            className="input-field" 
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Calculate Age At (End)</label>
          <input 
            type="date" 
            className="input-field" 
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
      </div>

      <button className="btn" onClick={calculateAge} style={{ width: '100%', marginBottom: '1.5rem' }}>Calculate Age</button>

      {result && result.error && (
        <p style={{ color: 'red' }}>{result.error}</p>
      )}

      {result && !result.error && (
        <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Exact Age</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.2 }}>
            {result.years} <span style={{ fontSize: '1.5rem', color: 'var(--text-main)', fontWeight: 600 }}>Years</span>, <br />
            {result.months} <span style={{ fontSize: '1.5rem', color: 'var(--text-main)', fontWeight: 600 }}>Months</span>, <br />
            {result.days} <span style={{ fontSize: '1.5rem', color: 'var(--text-main)', fontWeight: 600 }}>Days</span>
          </div>
          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}>
            Total Days: <strong>{result.totalDays.toLocaleString()}</strong> days
          </div>
        </div>
      )}
    </div>
  );
}
