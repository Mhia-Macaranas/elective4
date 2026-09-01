import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { HeaderNavigation } from '@/components/organisms/HeaderNavigation';
import { Footer } from '@/components/sections/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Discover Pangasinan | Heritage & Destinations',
  description: 'Explore Pangasinan heritage, culture, tourism, natural attractions, historical landmarks, and destinations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased flex flex-col min-h-screen`}>
        <HeaderNavigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
