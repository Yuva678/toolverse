export const metadata = {
  title: 'Contact Us — ToolVexa',
  description: 'Get in touch with the ToolVexa support team for feature requests, bug reports, or general inquiries.',
};

export default function ContactPage() {
  return (
    <div className="container prose">
      <h1>Contact Us</h1>
      <p>
        We love hearing from our users! Whether you want to suggest a new tool, report a pesky bug, or simply say hello, the ToolVexa team is here to listen.
      </p>

      <h2>How to Reach Us</h2>
      <p>
        Currently, the best way to get in contact with our support and development team is via email. We strive to respond to all legitimate inquiries within 48 business hours.
      </p>

      <ul>
        <li><strong>General Inquiries:</strong> hello@toolvexa.com</li>
        <li><strong>Bug Reports:</strong> bugs@toolvexa.com</li>
        <li><strong>Partnerships & Advertising:</strong> ads@toolvexa.com</li>
      </ul>

      <h2>Feature Requests</h2>
      <p>
        If you have a brilliant idea for a new calculator, converter, or utility that would make your life easier, please send us an email with the subject line <strong>"Feature Request"</strong>. 
        We prioritize the tools that receive the most demand from our community.
      </p>

      <h2>Mailing Address</h2>
      <p>
        <em>ToolVexa Digital Utilities</em><br/>
        123 Web Tech Avenue, Suite 400<br/>
        Innovation District, CA 90210<br/>
        United States
      </p>

      <p><em>*Note: Since our tools are 100% free and we do not require accounts, we do not offer real-time phone support.*</em></p>
    </div>
  );
}
