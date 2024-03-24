import Header from '@/app/_components/header1/header';
import TextInput from '@/app/_components/textInput-with-state/textInput';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auth page Layout',
  description: 'Auth page Layout'
};

const navLinks = [
  { name: 'Register', href: '/register1' },
  { name: 'Login', href: '/login1' },
  { name: 'Forgot Password', href: '/forgot-password1' }
];

interface AuthPageLayout {
  children: React.ReactNode;
}

const AuthPagesLayout = ({ children }: Readonly<AuthPageLayout>) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <div style={{ marginBottom: '30px' }}>
        <TextInput />
      </div>

      {children}

      <footer>Auth Footer</footer>
    </>
  );
};

export default AuthPagesLayout;
