import Link from 'next/link';
import Emoji from './Emoji';
import Image from 'next/image';
import hljs from 'highlight.js';
import { useRef, useEffect } from 'react';

// Import of highlight.js styles removed for troubleshooting

const CustomLink = (props) => {
  const { href, children, ...rest } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
        <Link href={href} {...rest}>
          {children} {/* ✅ Next.js 13+ Correct way */}
        </Link>
    );
  }

  return (
      <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
        {children}
      </a>
  );
};

const MDXComponents = ({ children }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [children]);

  return (
    <div ref={codeRef}>
      <Image />
      <a href="#">Custom Link</a>
      <Emoji />
      {children}
    </div>
  );
};

export default MDXComponents;
