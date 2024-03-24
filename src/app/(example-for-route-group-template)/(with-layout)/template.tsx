import Header from '@/app/_components/header1/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auth page Template',
  description: 'Auth page Template'
};

const navLinks = [
  { name: 'Register', href: '/register2' },
  { name: 'Login', href: '/login2' },
  { name: 'Forgot Password', href: '/forgot-password2' }
];

interface AuthPageLayout {
  children: React.ReactNode;
}

const AuthPagesLayout = ({ children }: Readonly<AuthPageLayout>) => {
  return (
    <>
      <Header navLinks={navLinks} />

      {children}

      <footer>Auth Footer</footer>
    </>
  );
};

export default AuthPagesLayout;
