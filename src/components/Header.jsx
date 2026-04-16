import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo">
          ⚡ ToolVexa
        </Link>
        <nav className="nav-links">
          <Link href="/tools">All Tools</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
