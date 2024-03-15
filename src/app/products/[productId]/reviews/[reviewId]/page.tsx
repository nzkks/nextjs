import { notFound } from 'next/navigation';

type ReviewDetailsType = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewDetails = ({ params }: ReviewDetailsType) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Review {params.reviewId} Details for product {params.productId}
    </div>
  );
};

export default ReviewDetails;
