import Link from 'next/link';
import Emoji from './Emoji';
import Image from 'next/image';

const CustomLink = (props) => {
  const { href, children, ...rest } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  );
};

// Force all text to be white in dark mode
const whiteTextStyle = { color: 'white !important' };

const withWhiteText = (Component) => {
  return ({ children, style, ...props }) => (
    <Component style={{ ...whiteTextStyle, ...style }} {...props}>
      {children}
    </Component>
  );
};

const MDXComponents = {
  a: CustomLink,
  Image,
  Emoji,
  h1: withWhiteText('h1'),
  h2: withWhiteText('h2'),
  h3: withWhiteText('h3'),
  h4: withWhiteText('h4'),
  p: withWhiteText('p'),
  ul: withWhiteText('ul'),
  ol: withWhiteText('ol'),
  li: withWhiteText('li'),
  strong: withWhiteText('strong'),
  em: withWhiteText('em'),
  code: withWhiteText('code'),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-4">
      <table style={whiteTextStyle} className="w-full border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: withWhiteText('thead'),
  tbody: withWhiteText('tbody'),
  tr: withWhiteText('tr'),
  th: ({ children, ...props }) => (
    <th style={whiteTextStyle} className="p-2 text-left border-b border-gray-600" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td style={whiteTextStyle} className="p-2 border-b border-gray-600" {...props}>
      {children}
    </td>
  ),
  // Add a wrapper component to ensure all nested content is white
  wrapper: ({ children }) => (
    <div style={whiteTextStyle}>
      {children}
    </div>
  ),
};

export default MDXComponents;
