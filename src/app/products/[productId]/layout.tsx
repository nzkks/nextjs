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
      <div>
        <div>Featured Products</div>
        <ul>
          <li>Featured product 1</li>
          <li>Featured product 2</li>
        </ul>
      </div>
    </>
  );
}
