import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/container';

// ✅ GA4 삽입을 위한 Script
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '우리 스스로 주인되는 세상',
  description: '한국의 입장에서 본 지정학과 서민의 삶을 위한 정치',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* ✅ Google tag (gtag.js) - GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M2XMR4D8DD"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M2XMR4D8DD');
          `}
        </Script>
      </body>
    </html>
  );
}
