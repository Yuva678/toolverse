'use client';

export default function ImageToolsPlaceholder({ mode }) {
  return (
    <div style={{ background: 'var(--background)', padding: '3rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖼️</div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{mode} Tool</h3>
      <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto', marginBottom: '2rem' }}>
        Due to browser constraints, please drop your image below. Next.js natively handles image optimization beautifully. Advanced canvas pixel manipulation logic runs entirely client-side.
      </p>
      
      <div style={{ border: '2px dashed var(--border)', padding: '4rem 2rem', borderRadius: '12px', background: 'var(--card-bg)' }}>
        <p style={{ fontWeight: 600, color: 'var(--primary)' }}>Drag and drop your files here</p>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>or click to browse</p>
        <input type="file" style={{ display: 'none' }} />
      </div>
    </div>
  );
}
