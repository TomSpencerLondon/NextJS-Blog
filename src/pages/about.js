import { CgArrowLongRight } from 'react-icons/cg';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontMatter } from '@/lib/mdx';

import AppContainer from '../components/AppContainer';
import BlogCard from '@/components/BlogCard';
import AboutHeading from '@/components/AboutHeading';
import CustomLink from '@/components/Link';
import Emoji from 'src/components/Emoji';
import SectionDivider from 'src/components/SectionDivider';

const MAX_DISPLAY = 3;

export default function AboutPage({ posts }) {
  return (
    <AppContainer>
      <NextSeo title="Meet Tom Spencer, Software Engineer." />
      <div className="max-w-4xl mx-auto px-4 md:px-0 my-24">
        <h1 className="font-bold text-3xl md:text-5xl mb-1">
          Hi, my name is Tom Spencer <Emoji emoji="👋" />
        </h1>
        <AboutHeading imgSrc="/_next/image?url=%2Fimg%2Ftom-spencer-headshot.jpg&w=3840&q=75" />
        <SectionDivider />
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight mt-4 mb-2">Latest Posts</h2>
        <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mb-10">
          Thoughts of Tom Spencer, a Software Engineer.
        </p>

        {posts.sort(
            (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        ).slice(0, MAX_DISPLAY).map((frontMatter) => (
          <BlogCard key={frontMatter.title} date={frontMatter.publishedAt} {...frontMatter} />
        ))}
        <p className="text-center">
          <CustomLink href={`/posts`}>
            <a className="inline-flex link-underline items-center text-lg my-4">
              View All Posts <CgArrowLongRight size="1.5em" className="ml-2" />
            </a>
          </CustomLink>
        </p>
      </div>
    </AppContainer>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
}
