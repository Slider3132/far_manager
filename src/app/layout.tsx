import { Layout } from '@/layout';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/index.css';

const dos = localFont({
  src: '../../public/fonts/ModernDOS8x16.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Q Test Task',
  description: 'Far Manager',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dos.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
