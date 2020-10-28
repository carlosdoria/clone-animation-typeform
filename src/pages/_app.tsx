import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Clone
        </title>
        <meta name='description' content='Clone da inferface do pipefy' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
