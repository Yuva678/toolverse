import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'ToolVexa — Free Online Tools for Everyone',
  description: 'ToolVexa offers 15+ free online tools: word counter, image resizer, GPA calculator, Base64 encoder, JSON formatter and more. No signup required.',
  keywords: ['free online tools', 'word counter', 'image tools', 'developer tools', 'student tools'],
  openGraph: {
    title: 'ToolVexa — Free Online Tools',
    description: '15+ free browser-based tools for text, images, students & developers.',
    url: 'https://toolvexa.com/',
    siteName: 'ToolVexa',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
        {/* AdSense Script Placeholder */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
