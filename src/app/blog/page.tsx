import { Metadata } from 'next';
import Link from 'next/link';

export const metaData: Metadata = {
  title: 'Blog'
};

const Blog = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <div>My Blog</div>
    </>
  );
};

export default Blog;
