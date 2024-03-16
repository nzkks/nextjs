import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Codevolution',
    default: 'Next.js app tutorial from Codevolution'
  },
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
        <header className="h-[100px] p-4 bg-[#89b6f1]">Header</header>
        <main className="min-h-[300px] p-4">{children}</main>
        <footer className="h-[100px] p-4 bg-[#d5d5d5]">Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
