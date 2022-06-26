import { useState } from 'react';
import { NextSeo, BlogJsonLd } from 'next-seo';

import AppContainer from '@/components/AppContainer';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import SectionDivider from 'src/components/SectionDivider';
import BlogCard from 'src/components/BlogCard';

export default function BlogIndex({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => {
      const concat = frontMatter.title + frontMatter.summary + frontMatter.tags;
      return concat.toLowerCase().includes(searchValue.toLowerCase());
    });
  return (
    <AppContainer>
      <NextSeo
        title="TomSpencerLondon Posts » Digital Blog"
        description="Thoughts of Tom Spencer, software developer and Business Analyst."
        canonical="https://tomspencerlondon.org/posts/"
        openGraph={{
          url: 'https://tomspencerlondon.org/posts/',
          title: 'TomSpencerLondon Posts » Digital Blog',
          description:
            'Thoughts of Tom Spencer, sofware engineer.',
          images: [
            {
              url: 'https://tomspencerlondon.org/_next/image?url=%2Fimg%2Fweb-header.jpg',
              width: 1200,
              height: 627,
              alt: 'Tom Spencer Cover - Software Developer and Business Analyst',
            },
          ],
        }}
        twitter={{
          handle: '@TomSpencerr',
          site: '@TomSpencerr',
          cardType: 'summary_large_image',
        }}
      />
      <BlogJsonLd
        url="https://tomspencerlondon.org/posts/"
        title="Thoughts of Tom Spencer"
        images={['https://tomspencerlondon.org/img/tom-spencer-headshot.jpg']}
        datePublished="2020-07-06"
        dateModified="2021-03-09"
        authorName="Tom Spencer"
        description="Thoughts of Tom Spencer, a Software Developer and Business Analyst."
      />
      <div className="max-w-3xl mx-auto px-4 md:px-0 my-24">
        <div className="my-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1">
            Tom's Thoughts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-200">
            I've always enjoyed learning. I like to write about things I'm doing,
            learning, or creating. This blog explores the thoughts of a Software Developer and Business Analyst.
          </p>
        </div>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search posts"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search posts"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-indigo-500 focus:border-gray-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-500 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-8">All Posts</h3>
        <SectionDivider />

        {!filteredBlogPosts.length && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">No posts found.</p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogCard key={frontMatter.title} date={frontMatter.publishedAt} {...frontMatter} />
        ))}
      </div>
    </AppContainer>
  );
}
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
}
