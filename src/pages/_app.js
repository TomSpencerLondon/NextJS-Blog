import Head from 'next/head';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@/theme/ThemeContext';

import { DefaultSeo } from 'next-seo';
import SEO from '@/utils/next-seo.config';
import '@/styles/tailwind.css';

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MDXProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
