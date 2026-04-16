import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link href="/" className="logo" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
            ⚡ ToolVexa
          </Link>
          <p style={{ color: 'var(--text-muted)' }}>
            Empowering students, developers, and writers with 100% free browser-based online tools. No tracking, no limits.
          </p>
        </div>
        
        <div className="footer-col">
          <h4>Top Tools</h4>
          <Link href="/tools/word-counter">Word Counter</Link>
          <Link href="/tools/age-calculator">Age Calculator</Link>
          <Link href="/tools/image-resizer">Image Resizer</Link>
          <Link href="/tools/json-formatter">JSON Formatter</Link>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <Link href="/blog">Our Blog</Link>
          <Link href="/tools">All Tools Directory</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Support</Link>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
        <p>&copy; {new Date().getFullYear()} ToolVexa.io. All rights reserved.</p>
      </div>
    </footer>
  );
}
