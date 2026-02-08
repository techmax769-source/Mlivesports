import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MLiveSports - Live Football Scores, News & Stats',
  description: 'Live football scores, match highlights, league standings, betting tips, and latest football news',
  keywords: 'football, live scores, sports, betting tips, football news, premier league, champions league',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-dark-950 to-dark-900`}>
        <Navigation />
        <main className="pt-16 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            className: 'glass-card',
            style: {
              background: 'rgb(15 23 42 / 0.8)',
              color: '#fff',
              border: '1px solid rgb(30 41 59 / 0.5)',
            },
          }}
        />
      </body>
    </html>
  );
}
