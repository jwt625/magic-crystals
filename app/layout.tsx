import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quanta Crystals - Quantum Protection Through Crystalline Resonance',
  description:
    'Discover the power of Ti:Sapphire, Ce:LuAG, and other advanced crystalline materials. What particle physicists have known for decades.',
  keywords:
    'quantum crystals, Ti:Sapphire, scintillator, crystal healing, 5G protection, EMF shield',
  openGraph: {
    title: 'Quanta Crystals - Quantum Protection',
    description: 'What Particle Physicists Have Known For Decades',
    images: ['/assets/banner.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quanta Crystals - Quantum Protection',
    description: 'What Particle Physicists Have Known For Decades',
    images: ['/assets/banner.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white font-sans antialiased">{children}</body>
    </html>
  );
}
