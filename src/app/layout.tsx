import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js app tutorial from Codevolution',
  description: 'Next.js app tutorial from Codevolution'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
