import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'রাজশাহী জেলা সমিতি ঢাকা',
  description: 'ঢাকায় বসবাসরত বৃহত্তর রাজশাহীবাসীর মিলনমেলা',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Suspense fallback={<div className="h-20 bg-[var(--card)] border-b border-[var(--ln)]"></div>}>
              <Header />
            </Suspense>

            <main className="flex-1 w-full max-w-[1440px] mx-auto px-[15px] md:px-[30px] py-6">
              {children}
            </main>

            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}