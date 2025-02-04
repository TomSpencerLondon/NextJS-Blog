import React, { useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug, getAllFilesFrontMatter } from '@/lib/mdx';
import Custom404 from '@/pages/404';
import PostLayout from '@/layouts/post';
import MDXComponents from '@/components/MDXComponents';

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = MDXRemote(mdxSource, {
    components: MDXComponents,
  });

  return (
    <>
      {frontMatter.draft !== true ? (
        <PostLayout frontMatter={frontMatter}>{content}</PostLayout>
      ) : (
        <Custom404 />
      )}
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('posts');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('posts');
  const postIndex = allPosts.findIndex((post) => post.slug === params.slug);
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug('posts', params.slug);

  return { props: post };
}
