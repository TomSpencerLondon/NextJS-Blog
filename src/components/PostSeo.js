import { NextSeo, ArticleJsonLd } from 'next-seo';

const PostSeo = ({ frontMatter }) => {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        canonical={`https://tomcraftsman.xyz/posts/${frontMatter.slug}`}
        openGraph={{
          url: `https://tomcraftsman.xyz/posts/${frontMatter.slug}`,
          title: `${frontMatter.title}`,
          description: `${frontMatter.summary}`,
          images: [
            {
              url: `https://tomcraftsman.xyz${frontMatter.image}`,
              width: 1200,
              height: 720,
              alt: `Cover image for ${frontMatter.title}`,
            },
          ],
        }}
        twitter={{
          handle: '@TomSpencerr',
          site: '@TomSpencerr',
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        url={`https://tomcraftsman.xyz/posts/${frontMatter.slug}`}
        title={frontMatter.title}
        images={[`https://tomcraftsman.xyz${frontMatter.image}`]}
        datePublished={`${frontMatter.publishedAt}`}
        dateModified={`${frontMatter.lastmod}`}
        authorName="Tom Spencer"
        publisherName="Tom Spencer"
        description={frontMatter.summary}
      />
    </>
  );
};

export default PostSeo;
