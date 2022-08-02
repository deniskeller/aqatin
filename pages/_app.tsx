import '../styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="keywords" content="Aqatin" />
        <meta name="author" content="Aqatin" />
        <meta name="description" content="Aqatin" />
        <title>Aqatin</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
