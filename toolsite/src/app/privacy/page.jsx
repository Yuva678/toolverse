export const metadata = {
  title: 'Privacy Policy — ToolVerse',
  description: 'Learn how ToolVerse protects your data. We use client-side processing to ensure your data stays secure.',
};

export default function PrivacyPage() {
  return (
    <div className="container prose">
      <h1>Privacy Policy</h1>
      <p><em>Last Updated: October 2025</em></p>
      
      <p>At <strong>ToolVerse</strong> ("we", "us", or "our"), your privacy is our top priority. This Privacy Policy outlines the types of information we collect, how it is used, and how we protect your data while you use our website (toolverse.io).</p>

      <h2>1. Information We Do Not Collect</h2>
      <p>We believe in absolute data privacy. Because almost all of our tools (including text formatters, image resizers, and calculators) process data <strong>client-side</strong>—meaning directly within your internet browser—we do <strong>not</strong> collect, store, or transmit the content you input into our tools to our servers. Any text you paste or image you upload never leaves your personal device.</p>

      <h2>2. Information We Do Collect</h2>
      <p>To improve our service and monetize the platform through advertisements, we may collect non-personal, aggregated data:</p>
      <ul>
        <li><strong>Log Files:</strong> Like many standard web servers, we use log files that include internet protocol (IP) addresses, browser types, Internet Service Providers (ISPs), date/time stamps, referring/exit pages, and number of clicks.</li>
        <li><strong>Cookies and Web Beacons:</strong> We use cookies to store information about your preferences, to record user-specific information on which pages the site visitor accesses or visits, and to customize our web page content based upon visitors' browser type.</li>
      </ul>

      <h2>3. Google AdSense & Third-Party Cookies</h2>
      <p>We use Google AdSense to display advertisements on ToolVerse. Google, as a third-party vendor, uses cookies to serve ads on our site.</p>
      <ul>
        <li>Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet.</li>
        <li>Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</li>
      </ul>

      <h2>4. Third-Party Links</h2>
      <p>Our website may contain links to other sites. Please be aware that we are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of every website that collects personally identifiable information.</p>

      <h2>5. Changes to This Privacy Policy</h2>
      <p>We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page immediately. We advise you to review this Privacy Policy periodically for any changes.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions regarding this Privacy Policy, please contact us at privacy@toolverse.io.</p>
    </div>
  );
}
