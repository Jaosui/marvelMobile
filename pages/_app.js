import '../styles/globals.css'
import 'antd/dist/antd.css';
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script> */}
        {/* <script src="https://static.line-scdn.net/liff/edge/2.1/liff.js"></script> */}
      </Head>
      {/* <Script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.13.0/sdk.js"></Script> */}
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
