/**
 * ToolVerse — nav.js
 * Injects shared navigation and footer into every page.
 * Detects if current page is in /tools/ to set correct relative paths.
 */
(function() {
  const inTools = window.location.pathname.includes('/tools/');
  const R = inTools ? '../' : '';   // path prefix for root files

  /* ── Navigation HTML ────────────────────────────────────────── */
  const NAV = `
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-wrap">
    <a href="${R}index.html" class="nav-logo" aria-label="ToolVerse Home">
      <div class="logo-icon">⚡</div>
      <span class="logo-text">Tool<span>Verse</span></span>
    </a>

    <ul class="nav-links">
      <li><a href="${R}index.html">Home</a></li>
      <li class="nav-drop">
        <a href="#">Tools ▾</a>
        <div class="drop-menu">
          <a href="${R}tools/word-counter.html">📝 Text Tools</a>
          <a href="${R}tools/image-resizer.html">🖼️ Image Tools</a>
          <a href="${R}tools/age-calculator.html">🎓 Student Tools</a>
          <a href="${R}tools/base64.html">💻 Developer Tools</a>
        </div>
      </li>
      <li><a href="${R}about.html">About</a></li>
      <li><a href="${R}contact.html">Contact</a></li>
    </ul>

    <div class="nav-actions">
      <button class="theme-btn" aria-label="Toggle dark mode">🌙</button>
      <button class="ham-btn" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <div class="mobile-menu" role="dialog" aria-label="Mobile navigation">
    <ul class="nav-links">
      <li><a href="${R}index.html">🏠 Home</a></li>
      <li><a href="${R}tools/word-counter.html">📝 Text Tools</a></li>
      <li><a href="${R}tools/image-resizer.html">🖼️ Image Tools</a></li>
      <li><a href="${R}tools/age-calculator.html">🎓 Student Tools</a></li>
      <li><a href="${R}tools/base64.html">💻 Developer Tools</a></li>
      <li><a href="${R}about.html">ℹ️ About</a></li>
      <li><a href="${R}contact.html">✉️ Contact</a></li>
    </ul>
  </div>
</nav>`;

  /* ── Footer HTML ─────────────────────────────────────────────── */
  const FOOTER = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="ad-unit ad-footer">📢 Advertisement — 728×90 Footer</div>
    <div class="footer-grid">
      <div class="f-brand">
        <a href="${R}index.html" class="nav-logo">
          <div class="logo-icon">⚡</div>
          <span class="logo-text">Tool<span>Verse</span></span>
        </a>
        <p>Free, fast, and privacy-friendly online tools. Everything runs in your browser — your data never leaves your device.</p>
      </div>
      <div class="f-col">
        <h4>Text Tools</h4>
        <ul class="f-links">
          <li><a href="${R}tools/word-counter.html">Word Counter</a></li>
          <li><a href="${R}tools/case-converter.html">Case Converter</a></li>
          <li><a href="${R}tools/text-repeater.html">Text Repeater</a></li>
          <li><a href="${R}tools/text-sorter.html">Text Sorter</a></li>
          <li><a href="${R}tools/remove-duplicate-lines.html">Remove Duplicates</a></li>
        </ul>
      </div>
      <div class="f-col">
        <h4>More Tools</h4>
        <ul class="f-links">
          <li><a href="${R}tools/image-resizer.html">Image Resizer</a></li>
          <li><a href="${R}tools/image-compressor.html">Image Compressor</a></li>
          <li><a href="${R}tools/age-calculator.html">Age Calculator</a></li>
          <li><a href="${R}tools/gpa-calculator.html">GPA Calculator</a></li>
          <li><a href="${R}tools/json-formatter.html">JSON Formatter</a></li>
        </ul>
      </div>
      <div class="f-col">
        <h4>Company</h4>
        <ul class="f-links">
          <li><a href="${R}about.html">About Us</a></li>
          <li><a href="${R}contact.html">Contact</a></li>
          <li><a href="${R}privacy.html">Privacy Policy</a></li>
          <li><a href="${R}terms.html">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bot">
      <p>© <span class="yr"></span> ToolVerse. All rights reserved. Tools run locally in your browser.</p>
      <p>Made with ❤️ for the web</p>
    </div>
  </div>
</footer>`;

  /* ── Inject ──────────────────────────────────────────────────── */
  const navPh = document.getElementById('tv-nav');
  const ftPh  = document.getElementById('tv-footer');
  if (navPh) navPh.outerHTML = NAV;
  if (ftPh)  ftPh.outerHTML  = FOOTER;
})();
