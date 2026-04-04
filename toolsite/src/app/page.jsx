import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            ⚡ 100% Free · No Login · Secure
          </span>
          <h1>Free Online Tools<br />for <span>Everyone</span></h1>
          <p>
            Welcome to ToolVerse. Explore our comprehensive collection of browser-based utilities spanning from text manipulation to developer formatting. 
            All tools work instantly in our ad-supported ecosystem, requiring absolutely zero sign-ups or server uploads.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0' }}>
            <Link href="/tools" className="btn">Explore All Tools</Link>
            <Link href="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Browse by Category</h2>
        <div className="grid grid-cols-4">
          <Link href="/tools?cat=text" className="card">
            <span className="card-icon">📝</span>
            <h3 className="card-title">Text Tools</h3>
            <p className="card-desc">Format, count, and manipulate strings effortlessly.</p>
          </Link>
          <Link href="/tools?cat=image" className="card">
            <span className="card-icon">🖼️</span>
            <h3 className="card-title">Image Tools</h3>
            <p className="card-desc">Resize and compress visual media in seconds.</p>
          </Link>
          <Link href="/tools?cat=student" className="card">
            <span className="card-icon">🎓</span>
            <h3 className="card-title">Student Tools</h3>
            <p className="card-desc">Calculators, randomizers, and GPA grading.</p>
          </Link>
          <Link href="/tools?cat=dev" className="card">
            <span className="card-icon">💻</span>
            <h3 className="card-title">Developer Tools</h3>
            <p className="card-desc">JSON formatters, encoders, and base64 tools.</p>
          </Link>
        </div>
      </section>

      {/* In-Content Ad Placeholder */}
      <div className="container">
         <div className="ad-unit ad-leaderboard">Advertisement (AdSense 728x90)</div>
      </div>

      {/* SEO Content Section (700+ Words) */}
      <section className="container prose">
        <h2>About ToolVerse: Your Ultimate Free Online Utility Platform</h2>
        <p>
          Welcome to <strong>ToolVerse</strong>, the web's premier destination for high-quality, free online tools. Whether you are a student crunching numbers for an upcoming assignment, a web developer debugging complex JSON structures, or a content creator refining thousands of words for an article, our platform provides exactly what you need. 
        </p>
        <p>
          In today's fast-paced digital world, efficiency is paramount. People simply do not have the time to download bulky software applications or sign up for subscription services just to perform a simple task like resizing an image or counting the characters in a tweet. That is the philosophy behind <strong>ToolVerse</strong>. We believe that everyday utility tools should be readily accessible, entirely free, and incredibly fast.
        </p>

        <h3>Why Use Our Free Online Tools?</h3>
        <p>
          We pride ourselves on offering a vast range of diverse applications. Here are a few core reasons why thousands of users turn to our platform every single day:
        </p>
        <ul>
          <li><strong>No Registration Required:</strong> Forget about paying monthly fees or handing out your email address. Every single tool on our site is free to use forever. There are absolutely no hidden paywalls.</li>
          <li><strong>Blazing Fast Performance:</strong> Because our tools are built using modern web standard technologies, they load almost instantly. You do not wait for servers to respond; the processing happens right in your internet browser.</li>
          <li><strong>Cross-Platform Compatibility:</strong> Since we are 100% browser-based, you can access our tools from Windows, macOS, Linux, iOS, or Android devices without installing a single application.</li>
        </ul>

        <h3>Comprehensive Security and Privacy</h3>
        <p>
          A common concern when using online tools—especially those involving image compression, text counting, or code formatting—is privacy. What happens to the files you upload? Who reads the text you paste?
        </p>
        <p>
          At <strong>ToolVerse</strong>, we prioritize your data privacy. The majority of our utilities are designed to run <em>client-side</em>. This technical term means that the computing power of your own device (whether it's a laptop, desktop, or mobile phone) does all the work. Your sensitive text, your private images, and your critical code snippets <strong>never leave your computer</strong>. They are not uploaded to our servers, and they are never stored in any database. You have 100% data ownership. 
        </p>

        <h3>Who Can Benefit from ToolVerse?</h3>
        <p>
          Our tools are designed to cater to a broad spectrum of the internet's population:
        </p>
        <ol>
          <li><strong>Writers and Authors:</strong> Managing word counts, converting text cases, and ensuring that essays meet specific limits is simplified using our dedicated Text Tools. </li>
          <li><strong>Students and Educators:</strong> Calculating grade point averages (GPA), determining exact ages, and solving percentage math problems are streamlined via our Student Tools.</li>
          <li><strong>Developers and Programmers:</strong> Handling Base64 string encoding or decoding, formatting messy JSON files into readable structures, and quickly generating code snippets are made straightforward by our Developer Tools section.</li>
          <li><strong>Marketers and Designers:</strong> Our robust Image Tools let professionals quickly compress large graphics for web optimization, change file formats from PNG to JPG, or resize assets for social media platforms.</li>
        </ol>

        <h3>How Browser-Based Technology Powers Us</h3>
        <p>
          Unlike legacy platforms that rely on slow, heavy backend architectures, ToolVerse utilizes advanced <strong>Next.js</strong> and React frameworks alongside modern JavaScript APIs (like the Canvas API for image manipulation and FileReader for text). This modern technological stack is what allows us to deliver such high-speed, lag-free user experiences. It is also what enables us to guarantee that your data remains securely within your browser window. By reducing server costs through client-side scripting, we can sustain the platform entirely through non-intrusive advertisements (like Google AdSense), ensuring the service remains genuinely free for end users everywhere.
        </p>

        <h3>Frequently Asked Questions (FAQs)</h3>
        <p><strong>Are these tools truly 100% free?</strong><br/>
        Yes! All features across the entire ToolVerse website are completely free to use. We support our hosting and development costs by displaying minimal, relevant advertisements.
        </p>
        <p><strong>Do I need to download any software?</strong><br/>
        Absolutely not. Everything works right here in your web browser (Chrome, Firefox, Safari, Edge, etc.). You simply open the webpage, use the tool, and copy or download your results.
        </p>
        <p><strong>Is there a limit on how many times I can use a tool?</strong><br/>
        We do not impose strict per-user limits for standard operations. You can compress as many images or format as many code lines as you need. We want this suite of tools to be incredibly useful for your daily workflow.
        </p>
        
        <p>
          Start exploring today. Whether you need to fix a broken JSON string, evaluate your student GPA, or resize a massive logo, ToolVerse is here to make your internet browsing experience significantly better. Enjoy unrestricted utility at your fingertips.
        </p>
      </section>
    </div>
  );
}
