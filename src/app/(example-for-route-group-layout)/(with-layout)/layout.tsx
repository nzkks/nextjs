import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auth page Layout',
  description: 'Auth page Layout'
};

export default function AuthPagesLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>Auth Header</header>
      {children}
      <footer>Auth Footer</footer>
    </>
  );
}
