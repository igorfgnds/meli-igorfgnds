import '@/theme/globals.scss';
import variables from '@/theme/variables.module.scss';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import { description, title } from '@/utils/constants';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="theme-color" content={variables.primaryColor} />
        <link href="/favicon.svg" rel="icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
