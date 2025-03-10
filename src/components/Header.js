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
            <div className="relative w-10 h-10 cursor-pointer">
              <Image
                src="/img/tom-spencer-headshot.jpg"
                alt="Tom Spencer Headshot"
                fill
                className="rounded-full"
              />
            </div>
          </CustomLink>
        </div>
        <nav className="flex items-center">
          <div className="flex items-center justify-end flex-row space-x-8">
            {[
              { title: 'About', href: '/about' },
              { title: 'Posts', href: '/posts' },
              { title: 'Contact', href: 'mailto:tomspencerlondon@gmail.com' },
            ].map((nav) => (
              <CustomLink href={nav.href} key={nav.title} className="font-semibold text-base md:text-lg link-underline">
                {nav.title}
              </CustomLink>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
