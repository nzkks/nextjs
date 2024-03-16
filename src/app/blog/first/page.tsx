import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'blog post' }
};

const First = () => {
  return <div>My First blog</div>;
};

export default First;
