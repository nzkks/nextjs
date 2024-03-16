type ProductDetailsProps = {
  params: { productId: string };
};

const ProductDetails = ({ params }: ProductDetailsProps) => {
  return <div>Product Details {params.productId}</div>;
};

export default ProductDetails;
