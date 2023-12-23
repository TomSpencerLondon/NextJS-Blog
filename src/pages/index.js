import { CgArrowLongRight } from 'react-icons/cg';
import { getAllFilesFrontMatter } from '@/lib/mdx';

import AppContainer from '@/components/AppContainer';
import BlogCard from '@/components/BlogCard';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import CustomLink from '@/components/Link';
const MAX_DISPLAY = 3;

export default function Home({ posts }) {
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <AppContainer>
      <Hero
        title="Hi, my name is Tom Spencer."
        subTitle="I'm Tom Spencer, a Software Engineer"
      />
      <SectionDivider />
      <div className="max-w-4xl mx-auto mt-4 mb-10">
        <h2 className="font-bold text-3xl md:text-4xl mb-2 capitalize">Latest Posts</h2>
        <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl">
          Thoughts of Tom Spencer, a Software Engineer.
        </p>
      </div>

      {filteredBlogPosts.slice(0, MAX_DISPLAY).map((frontMatter) => (
        <BlogCard key={frontMatter.title} date={frontMatter.publishedAt} {...frontMatter} />
      ))}
      <p className="text-center">
        <CustomLink href={`/posts`}>
          <a className="inline-flex link-underline items-center text-lg my-4">
            View All Posts <CgArrowLongRight size="1.5em" className="ml-2" />
          </a>
        </CustomLink>
      </p>
    </AppContainer>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
}
