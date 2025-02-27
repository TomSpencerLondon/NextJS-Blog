import dayjs from 'dayjs';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import AppContainer from '@/components/AppContainer';
import BlogTitle from '@/components/BlogTitle';
import CustomLink from '@/components/Link';
import PostSeo from 'src/components/PostSeo';

const editUrl = (slug) =>
  `https://github.com/TomSpencerLondon/NextJS-Blog/tree/master/src/data/posts/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=@tomspencerr`;

export default function PostLayout({ children, frontMatter }) {
  return (
    <AppContainer>
      <PostSeo frontMatter={frontMatter} />
      <article className="max-w-3xl mx-auto px-0 md:px-4 my-24">
        <BlogTitle>{frontMatter.title}</BlogTitle>
        <div className="flex flex-col md:flex-row items-center justify-between pb-4">
          <p className="text-white">
            Written by:{' '}
            <CustomLink href="/about" className="text-white hover:text-indigo-300">
              Tom Spencer
            </CustomLink>
          </p>
          <span className="text-white italic">
            {dayjs(frontMatter.publishedAt).format('MMM DD, YYYY')}
            {' — '}
            {frontMatter.readingTime.text}
          </span>
        </div>
        <div className="prose prose-lg max-w-4xl mx-auto my-12 text-white">
          {children}
        </div>
        <div className="flex flex-row items-center justify-center text-sm space-x-4">
          <CustomLink href={discussUrl(frontMatter.slug)} className="text-white hover:text-indigo-300">
            Discuss on Twitter
          </CustomLink>
          <span className="text-white">•</span>
          <CustomLink href={editUrl(frontMatter.slug)} className="text-white hover:text-indigo-300">
            Edit on GitHub
          </CustomLink>
        </div>
      </article>
    </AppContainer>
  );
}
