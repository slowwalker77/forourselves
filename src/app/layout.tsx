import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

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
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* ✅ GA4 공식 삽입 (App Router + Vercel 대응) */}
        <GoogleAnalytics gaId="G-M2XMR4D8DD" />
      </body>
    </html>
  );
}
