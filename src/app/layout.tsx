import type { Metadata } from 'next';
import { Outfit, Cormorant_Garamond } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import { LenisProvider } from '@/providers/lenis-provider';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  // Outfit is a variable font, Next.js will automatically use the variable font file
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vdit.com'),
  title: 'Video Editor Portfolio | VDIT',
  description: 'Elevate your visual narrative with high-end video editing and professional motion design portfolio. View creative reels, ads, and event highlights.',
  keywords: 'Video Editor, Motion Design, Creative Reels, Cinematic Editing, Portfolio, Video Production',
  openGraph: {
    type: 'website',
    url: 'https://vdit.com/',
    title: 'Video Editor Portfolio | VDIT',
    description: 'Elevate your visual narrative with high-end video editing and professional motion design portfolio.',
    images: ['/assets/img1.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Editor Portfolio | VDIT',
    description: 'Elevate your visual narrative with high-end video editing and professional motion design portfolio.',
    images: ['/assets/img1.webp'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorantGaramond.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
