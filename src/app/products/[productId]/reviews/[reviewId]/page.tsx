type ReviewDetailsType = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewDetails = ({ params }: ReviewDetailsType) => {
  return (
    <div>
      Review {params.reviewId} Details for product {params.productId}
    </div>
  );
};

export default ReviewDetails;
