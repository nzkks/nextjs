'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type navItem = {
  name: string;
  href: string;
};

type navlinksProps = {
  navLinks: navItem[];
};

export default function Header({ navLinks }: navlinksProps) {
  const pathname = usePathname();

  return (
    <header className="p-4 mb-5 bg-[#101f41]">
      {navLinks.map((link, index) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link href={link.href} className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'} key={index}>
            {link.name}
          </Link>
        );
      })}
    </header>
  );
}
