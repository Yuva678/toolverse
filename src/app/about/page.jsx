export const metadata = {
  title: 'About Us — ToolVexa',
  description: 'Learn about ToolVexa, our mission, and why we provide free online utilities to millions of users worldwide.',
};

export default function AboutPage() {
  return (
    <div className="container prose">
      <h1>About ToolVexa</h1>
      <p>
        Welcome to <strong>ToolVexa</strong>, the ultimate ecosystem for premium, free online utilities designed for everyday digital tasks. 
        Our platform was born out of a simple necessity: we noticed a frustrating lack of clean, fast, and completely free online tools that didn't require user registration or hide features behind expensive paywalls.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        Our core mission is to democratize digital productivity. Whether you are a student working on a thesis, a web developer debugging code, or a digital marketer compressing massive images, 
        you should have access to reliable tools without having to navigate confusing interfaces or compromise your data privacy.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Speed:</strong> Built with modern Next.js and React technologies, our pages load instantly.</li>
        <li><strong>Client-Side Processing:</strong> We respect your privacy. All formatting, converting, and calculating happen securely within your own web browser. Your data never touches our servers.</li>
        <li><strong>100% Free:</strong> We believe essential tools should be accessible to everyone, everywhere, regardless of budget.</li>
      </ul>

      <h2>The Team</h2>
      <p>
        ToolVexa is maintained by a small, dedicated team of developers, designers, and internet enthusiasts who are passionate about building products that make a genuine difference in people's daily workflows. 
        We are constantly adding new features, improving algorithms, and listening to user feedback to make ToolVexa even better.
      </p>
      
      <p>If you have any suggestions for new tools or improvements, please don't hesitate to reach out to us via our Contact Page.</p>
    </div>
  );
}
