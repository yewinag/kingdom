import '../styles/global.css';

import ProgressBar from '@badrap/bar-of-progress';
import { AppLayout, StyledThemeProvider } from '@components';
import { GlobalStyles, PageLoading, Responsive } from '@styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

const progress = new ProgressBar({
  size: 2,
  color: '#F44336',
  className: 'bar-of-progress',
  delay: 100
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <PageLoading>
        <BeatLoader color="#D12729" />
      </PageLoading>
    );
  }
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2"
        />
        <title>SoulKingdom - watching films online</title>
        <meta
          name="description"
          content="SoulKingdom.com is the best Korea Drama website that provides you with complete movies, Kdrama Episodes, and Kdrama OSTs in HD quality through the Internet."
        />
        <meta
          name="keywords"
          content="soulkingdom korea drama series, complete movies, full HD quality movies"
        />

        <link rel="canonical" href="https://soulkingdom.net" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/apple-icon.png"></link>
        <meta name="theme-color" content="#F44336" />
      </Head>
      <ThemeProvider defaultTheme={theme || 'dark'}>
        <StyledThemeProvider>
          <GlobalStyles />
          <Responsive>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </Responsive>
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
