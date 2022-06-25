const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
  const feed = new RSS({
    title: 'Tom Spencer',
    site_url: 'https://tomspencerlondon.org',
    feed_url: 'https://tomspencerlondon.org/feed.xml',
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'data', 'posts'));

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'data', 'posts', name));
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: 'https://tomspencerlondon.org/posts/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
