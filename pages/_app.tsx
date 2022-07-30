// import '../styles/globals.css'
import '../styles/main.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { ThemeProvider } from 'next-themes';
import AppLayout from '../components/layouts/AppLayout';
import ProgressBar from '@badrap/bar-of-progress';
const progress = new ProgressBar({
  size: 2,
  color: '#38a169',
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
        <link rel="shortcut icon" href="" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <ThemeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
