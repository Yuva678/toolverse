/**
 * ToolVerse — main.js
 * Utilities: TOOLS_DB, theme, search, animations, copy, image helpers
 */

/* ── Tools Database ──────────────────────────────────────────── */
const TOOLS = [
  { id:'word-counter',          name:'Word Counter',            cat:'Text Tools',      icon:'🔢', desc:'Count words, characters, sentences & reading time.', url:'tools/word-counter.html' },
  { id:'case-converter',        name:'Case Converter',          cat:'Text Tools',      icon:'🔡', desc:'Convert to UPPER, lower, Title, camelCase & more.',  url:'tools/case-converter.html' },
  { id:'text-repeater',         name:'Text Repeater',           cat:'Text Tools',      icon:'🔁', desc:'Repeat any text multiple times with custom separator.',url:'tools/text-repeater.html' },
  { id:'remove-duplicate-lines',name:'Remove Duplicate Lines',  cat:'Text Tools',      icon:'🧹', desc:'Remove duplicate, empty or blank lines from text.',   url:'tools/remove-duplicate-lines.html' },
  { id:'text-sorter',           name:'Text Sorter',             cat:'Text Tools',      icon:'📋', desc:'Sort lines A–Z, Z–A, by length, or randomly.',       url:'tools/text-sorter.html' },
  { id:'image-resizer',         name:'Image Resizer',           cat:'Image Tools',     icon:'📐', desc:'Resize images to any dimension, right in your browser.',url:'tools/image-resizer.html' },
  { id:'image-compressor',      name:'Image Compressor',        cat:'Image Tools',     icon:'🗜️', desc:'Reduce image file size without losing much quality.', url:'tools/image-compressor.html' },
  { id:'jpg-to-png',            name:'JPG to PNG Converter',    cat:'Image Tools',     icon:'🖼️', desc:'Convert JPG/JPEG images to PNG format online.',       url:'tools/jpg-to-png.html' },
  { id:'png-to-jpg',            name:'PNG to JPG Converter',    cat:'Image Tools',     icon:'🌄', desc:'Convert PNG images to JPG/JPEG and reduce file size.',url:'tools/png-to-jpg.html' },
  { id:'age-calculator',        name:'Age Calculator',          cat:'Student Tools',   icon:'🎂', desc:'Find your exact age in years, months, days & more.',  url:'tools/age-calculator.html' },
  { id:'percentage-calculator', name:'Percentage Calculator',   cat:'Student Tools',   icon:'📊', desc:'Calculate percentages, changes, and ratios easily.',  url:'tools/percentage-calculator.html' },
  { id:'gpa-calculator',        name:'GPA Calculator',          cat:'Student Tools',   icon:'🎓', desc:'Calculate weighted GPA from grades and credit hours.', url:'tools/gpa-calculator.html' },
  { id:'random-number',         name:'Random Number Generator', cat:'Student Tools',   icon:'🎲', desc:'Generate random numbers in any range, instantly.',    url:'tools/random-number.html' },
  { id:'base64',                name:'Base64 Encoder/Decoder',  cat:'Developer Tools', icon:'🔐', desc:'Encode or decode text using Base64 encoding.',        url:'tools/base64.html' },
  { id:'json-formatter',        name:'JSON Formatter',          cat:'Developer Tools', icon:'{ }', desc:'Format, validate, and minify JSON data online.',    url:'tools/json-formatter.html' },
];

/* ── Theme Manager ───────────────────────────────────────────── */
const Theme = {
  init() {
    const saved   = localStorage.getItem('tv-theme');
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply(saved || (sysDark ? 'dark' : 'light'));
  },
  apply(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('tv-theme', t);
    document.querySelectorAll('.theme-btn').forEach(b => {
      b.textContent = t === 'dark' ? '☀️' : '🌙';
      b.title = t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    });
  },
  toggle() {
    this.apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  }
};

/* ── Mobile Menu ─────────────────────────────────────────────── */
const MobileNav = {
  init() {
    const ham  = document.querySelector('.ham-btn');
    const menu = document.querySelector('.mobile-menu');
    if (!ham || !menu) return;
    ham.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      ham.classList.toggle('open', open);
      ham.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      ham.classList.remove('open');
    }));
  }
};

/* ── Scroll animations ───────────────────────────────────────── */
const Anim = {
  init() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70);
      });
    }, { threshold:.1, rootMargin:'0px 0px -36px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
  }
};

/* ── Hero search ─────────────────────────────────────────────── */
const Search = {
  init() {
    document.querySelectorAll('.srch-input').forEach(inp => {
      const wrap = inp.closest('.hero-search') || inp.parentElement;
      const sugg = wrap?.querySelector('.srch-suggestions');

      inp.addEventListener('input', e => {
        const q = e.target.value.trim().toLowerCase();
        if (q.length < 2 || !sugg) return this.hide(sugg);
        this.show(q, sugg);
      });
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          const first = sugg?.querySelector('.sug-item');
          if (first) first.click();
        }
        if (e.key === 'Escape') this.hide(sugg);
      });
      document.addEventListener('click', e => {
        if (!wrap?.contains(e.target)) this.hide(sugg);
      });
    });
  },
  show(q, el) {
    if (!el) return;
    const res = TOOLS.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.cat.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q)
    ).slice(0, 6);

    if (!res.length) {
      el.innerHTML = `<div class="sug-item"><span class="sug-name" style="color:var(--txt3)">No tools found for "${q}"</span></div>`;
    } else {
      // Resolve path: tool pages use 'tools/x.html', root index uses same
      const isToolPage = window.location.pathname.includes('/tools/');
      el.innerHTML = res.map(t => {
        const href = isToolPage ? t.url.replace('tools/', '') : t.url;
        return `<div class="sug-item" onclick="location.href='${href}'">
          <span class="sug-ico">${t.icon}</span>
          <span class="sug-name">${t.name}</span>
          <span class="sug-cat">${t.cat}</span>
        </div>`;
      }).join('');
    }
    el.classList.add('open');
  },
  hide(el) { el?.classList.remove('open'); }
};

/* ── Filter bar (homepage) ───────────────────────────────────── */
const Filter = {
  init() {
    document.querySelectorAll('.f-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        document.querySelectorAll('.tool-card[data-cat]').forEach(card => {
          const show = cat === 'all' || card.dataset.cat === cat;
          card.hidden = !show;
        });
        checkNoResults();
      });
    });
  }
};

function checkNoResults() {
  const grid = document.getElementById('tools-grid');
  if (!grid) return;
  const visible = grid.querySelectorAll('.tool-card:not([hidden])').length;
  let nr = grid.querySelector('.no-results');
  if (!visible) {
    if (!nr) {
      nr = document.createElement('div');
      nr.className = 'no-results';
      nr.innerHTML = '<div class="nri">🔍</div><p>No tools match that filter.</p>';
      grid.appendChild(nr);
    }
  } else {
    nr?.remove();
  }
}

/* ── Toast ───────────────────────────────────────────────────── */
function showToast(msg, ms = 2800) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = Object.assign(document.createElement('div'), { className:'toast', innerHTML:`<span>✅</span> ${msg}` });
  document.body.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, ms);
}

/* ── Clipboard ───────────────────────────────────────────────── */
async function copyToClipboard(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = Object.assign(document.createElement('textarea'), { value:text });
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.append(ta);
    ta.select(); document.execCommand('copy'); ta.remove();
  }
  showToast('Copied to clipboard!');
  if (btn) { const orig=btn.textContent; btn.textContent='✅ Copied!'; setTimeout(()=>btn.textContent=orig,2000); }
}

/* ── Download ────────────────────────────────────────────────── */
function dlFile(blobOrUrl, name) {
  const a = document.createElement('a');
  a.href = typeof blobOrUrl === 'string' ? blobOrUrl : URL.createObjectURL(blobOrUrl);
  a.download = name; a.click();
  if (typeof blobOrUrl !== 'string') URL.revokeObjectURL(a.href);
}

/* ── Image helpers ───────────────────────────────────────────── */
const Img = {
  load(file) {
    return new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => { const i=new Image(); i.onload=()=>res(i); i.onerror=rej; i.src=r.result; };
      r.onerror=rej; r.readAsDataURL(file);
    });
  },
  canvas(img, w, h) {
    const c = document.createElement('canvas');
    c.width=w; c.height=h;
    c.getContext('2d').drawImage(img,0,0,w,h);
    return c;
  },
  dl(canvas, name, type='image/png', q=0.92) {
    canvas.toBlob(b => dlFile(b, name), type, q);
  },
  fmtSize(b) {
    if (b < 1024) return b+'B';
    if (b < 1048576) return (b/1024).toFixed(1)+'KB';
    return (b/1048576).toFixed(2)+'MB';
  }
};

/* ── Drag-and-drop ───────────────────────────────────────────── */
function initDrop(zone, fileInput, cb) {
  if (!zone) return;
  ['dragenter','dragover'].forEach(e => zone.addEventListener(e, ev => { ev.preventDefault(); zone.classList.add('drag-over'); }));
  ['dragleave','drop'].forEach(e => zone.addEventListener(e, () => zone.classList.remove('drag-over')));
  zone.addEventListener('drop', ev => { ev.preventDefault(); const f=ev.dataTransfer.files[0]; if(f) cb(f); });
  zone.addEventListener('click', () => fileInput?.click());
}

/* ── Render tool cards on homepage ──────────────────────────── */
function renderTools() {
  const grid = document.getElementById('tools-grid');
  if (!grid) return;
  grid.innerHTML = TOOLS.map(t => `
    <a href="${t.url}" class="tool-card fade-in" data-cat="${t.cat}" aria-label="${t.name}">
      <div class="tc-head">
        <div class="tc-ico">${t.icon}</div>
        <div class="tc-meta">
          <div class="tc-name">${t.name}</div>
          <span class="tc-cat">${t.cat}</span>
        </div>
      </div>
      <p class="tc-desc">${t.desc}</p>
      <div class="tc-foot">
        <span class="badge badge-green">Free</span>
        <span class="tc-open">Open tool →</span>
      </div>
    </a>`).join('');
  Anim.init();
}

/* ── Init ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  MobileNav.init();
  Anim.init();
  Search.init();
  Filter.init();
  renderTools();
  document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', () => Theme.toggle()));
  // Footer year
  document.querySelectorAll('.yr').forEach(el => el.textContent = new Date().getFullYear());
  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href && href !== '#' && path.endsWith(href.replace('../',''))) a.classList.add('active');
  });
});
