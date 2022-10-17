import '../styles/global.css';

import ProgressBar from '@badrap/bar-of-progress';
import { AppLayout, StyledThemeProvider } from '@components';
import { GlobalStyles, Responsive } from '@styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { ThemeProvider } from 'next-themes';
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
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>SoulKingdom</title>

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
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <ThemeProvider defaultTheme="system">
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
