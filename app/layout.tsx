import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ScrollProgress from '@/components/ScrollProgress';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prem & Prabhas Construction Pvt. Ltd. | Best Construction Company in Nepal',
  description: 'Your trusted partner in delivering high-quality residential, commercial, and infrastructure projects. Best construction company in Nepal.',
  keywords: 'Construction company in Nepal, Residential construction services, Commercial builders, House construction company, Best construction company, Prem and Prabhas Construction',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
