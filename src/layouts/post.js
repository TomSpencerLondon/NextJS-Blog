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
          <p className=" prose prose-indigo dark:prose-dark text-gray-700 dark:text-gray-200">
            Written by:{' '}
            <CustomLink href="/about">
              <a className="text-gray-700">Tom Spencer</a>
            </CustomLink>
          </p>
          <span className="text-gray-600 dark:text-gray-200 italic">
            {dayjs(frontMatter.publishedAt).format('MMM DD, YYYY')}
            {' — '}
            {frontMatter.readingTime.text}
          </span>
        </div>
        <div className="prose prose-indigo prose-lg dark:prose-dark max-w-4xl mx-auto my-12">
          {children}
        </div>
        <div className="flex flex-row items-center justify-center text-sm space-x-4">
          <CustomLink href={discussUrl(frontMatter.slug)}>
            <a className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-gray-400">
              Discuss on Twitter
            </a>
          </CustomLink>
          <span>•</span>
          <CustomLink href={editUrl(frontMatter.slug)}>
            <a className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-gray-400">
              Edit on GitHub
            </a>
          </CustomLink>
        </div>
      </article>
    </AppContainer>
  );
}
