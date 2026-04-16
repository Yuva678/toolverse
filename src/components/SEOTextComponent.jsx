export default function SEOTextComponent({ toolData }) {
  if (!toolData || !toolData.seoContent) return null;

  const seo = toolData.seoContent;

  return (
    <div className="prose">
      <h2>About the {toolData.title}</h2>
      <p>{seo.intro}</p>

      <h3>What This Tool Does</h3>
      <p>{seo.whatItDoes}</p>

      <h3>How to Use It</h3>
      <p>{seo.howToUse}</p>

      <h3>Common Use Cases</h3>
      <p>{seo.useCases}</p>

      <h3>Examples</h3>
      <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', whiteSpace: 'pre-wrap' }}>
        {seo.examples}
      </div>

      <h3>Frequently Asked Questions (FAQs)</h3>
      {seo.faqs.map((faq, idx) => (
        <div key={idx} style={{ marginBottom: '1rem' }}>
          <strong>Q: {faq.q}</strong>
          <p style={{ margin: 0 }}>A: {faq.a}</p>
        </div>
      ))}

      <div style={{ marginTop: '2rem', padding: '1rem', borderLeft: '4px solid var(--primary)', background: 'rgba(79, 70, 229, 0.05)' }}>
        <p style={{ margin: 0 }}>{seo.tips}</p>
      </div>
    </div>
  );
}
