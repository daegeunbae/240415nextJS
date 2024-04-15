import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global-styles';
import wrapper from '../store/configureStore';
import { ThemeProvider } from '../styles/themed-components';
import theme from 'styles/theme';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import Layout from 'components/Layout';
import { SessionProvider } from 'next-auth/react';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <Head>
        <title>데일리 체크</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <SessionProvider session={session}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </ThemeProvider>
      </>
    </>
  );
};

export default wrapper.withRedux(MyApp);
