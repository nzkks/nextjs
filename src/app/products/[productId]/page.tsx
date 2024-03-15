type ProductDetailsType = {
  params: { productId: string };
};

const ProductDetails = ({ params }: ProductDetailsType) => {
  return <div>Product Details {params.productId}</div>;
};

export default ProductDetails;
