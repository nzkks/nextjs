import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product page',
  description: 'Product page'
};

export default function ProductDetailsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>Product Header</header>
      {children}
      <footer>Product Footer</footer>
    </>
  );
}
