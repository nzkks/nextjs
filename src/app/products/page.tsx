import Link from 'next/link';

const ProductList = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <div>Product list</div>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
};

export default ProductList;
