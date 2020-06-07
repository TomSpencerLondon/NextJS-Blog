import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Tom, an apprentice Software Craftsman from London.
          I've been programming for 3 years since an inspiring bootcamp at <a href="https://makers.tech/">Makers</a>.
          I enjoyed working with Ruby and am now loving Java!
        </p>
        <p>
          I follow best practices for web development and have been praised for my strong communication skills, diligence and team work.
        </p>
        <p>
          I love working with HTTP, CI, Cloud, Craftsmanship and working to build a great team.
        </p>
        <p>
          I am keen craftsman and enjoy coding katas, algorithms and building projects.
          I also like spending time with my wife, playing the trumpet and reading books.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
