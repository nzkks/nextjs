import type { Metadata } from 'next';

type ProductDetailsProps = {
  params: { productId: string };
};

export const generateMetadata = ({ params }: ProductDetailsProps): Metadata => {
  return {
    title: `Prooduct ${params.productId}`
  };
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return <div>Product Details {params.productId}</div>;
};

export default ProductDetails;
