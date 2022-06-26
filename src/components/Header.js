import React, { useState } from 'react';
import Image from 'next/image';

import CustomLink from './Link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <header className="max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between py-8">
        <div>
          <CustomLink href="/">
            <a>
              <div className="relative w-10 h-10 cursor-pointer">
                <Image
                  src="ekom-enyong"
                  alt="Tom Spencer Headshot"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </a>
          </CustomLink>
        </div>
        <nav className="flex items-center">
          <div className="flex items-center justify-end flex-row space-x-8">
            {[
              { title: 'About', href: '/about' },
              { title: 'Posts', href: '/posts' },
              { title: 'Contact', href: 'mailto:tomspencerlondon@gmail.com' },
            ].map((nav) => (
              <CustomLink href={nav.href} key={nav.title}>
                <a className="font-semibold text-base md:text-lg link-underline">{nav.title}</a>
              </CustomLink>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
