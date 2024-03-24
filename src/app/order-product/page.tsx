'use client';

import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing your order');
    router.push('/');
    // router.replace('/'); // other optons
    // router.back();       // other optons
    // router.forward();    // other optons
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
