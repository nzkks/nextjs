'use client';

import { notFound } from 'next/navigation';

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

type ReviewDetailsProps = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewDetails = ({ params }: ReviewDetailsProps) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error('Error loading review');
  }

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
