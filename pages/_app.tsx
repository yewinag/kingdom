import '../styles/global.css';

import ProgressBar from '@badrap/bar-of-progress';
import { AppLayout, StyledThemeProvider } from '@components';
import { store } from '@store';
import { GlobalStyles, PageLoading, Responsive } from '@styles';
import * as gtag from '@utils';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import Script from 'next/script';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

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
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  // when route changes, track ga event
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  if (!mounted) {
    return <PageLoading />;
  }

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2"
        />
        <meta
          name="description"
          content="SoulKingdom.com is the best Korea Drama website that provides you with complete movies, Kdrama Episodes, and Kdrama OSTs in HD quality through the Internet."
        />
        <meta
          name="keywords"
          content="soulkingdom korea drama series, complete movies, full HD quality movies"
        />
        <title>SoulKingdom</title>
        <meta name="theme-color" content="#F44336" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-9PD01DNGQ6', {
                page_path: window.location.pathname,
              });
            `
          }}
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-9PD01DNGQ6`}
      />

      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default MyApp;
