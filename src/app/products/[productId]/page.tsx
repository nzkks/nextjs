import { Metadata } from 'next';

type ProductDetailsProps = {
  params: { productId: string };
};

export const generateMetadata = async ({ params }: ProductDetailsProps): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Samsung ${params.productId}`);
    }, 100);
  });

  return {
    title: `Prooduct ${title}`
  };
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return <div>Product Details {params.productId}</div>;
};

export default ProductDetails;
