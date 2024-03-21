import Link from 'next/link';

const ProductList = () => {
  const productId = 100;

  return (
    <>
      <Link href="/">Home</Link>
      <div>Product list</div>
      <ul>
        <li>
          <Link href={`products/${productId}`}>Product 1</Link>
        </li>
        <li>
          <Link href={`products/${productId}`}>Product 2</Link>
        </li>
        <li>
          <Link href={`products/${productId}`} replace>
            Product 3
          </Link>
        </li>
        <li>
          <Link href={`products/${productId}`}>Product {productId}</Link>
        </li>
      </ul>
    </>
  );
};

export default ProductList;
