import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { siteConfig } from '@/config/site';
import BottomNav from '@/components/BottomNav';
import CompareBar from '@/components/CompareBar';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Script from 'next/script';


const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
       <head>
          {/* This script is for the 3D model viewer */}
          <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" type="module" strategy="beforeInteractive" />
      </head>
      <body className={cn("font-body antialiased min-h-screen bg-background text-foreground", ptSans.variable, playfairDisplay.variable)}>
        <Providers>
          <div className="relative flex min-h-dvh flex-col">
            <Header />
            <main className="flex-1 pb-24">{children}</main>
            <Footer />
          </div>
          <FloatingWhatsApp />
          <CompareBar />
          <Toaster />
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}