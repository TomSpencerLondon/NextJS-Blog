import Link from 'next/link';
import Emoji from './Emoji';
import Image from 'next/image';

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


const MDXComponents = {
  Image,
  a: CustomLink,
  Emoji,
};

export default MDXComponents;
