import Link from 'next/link';
export default function CustomLink({ href, children, ...props }) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    // The <a> tag is not included in an internal link. It will need to be added when you use this component
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
