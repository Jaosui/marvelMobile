import React, { ReactElement } from 'react'
import Theme from "../styles/Theme.module.css";
import Head from 'next/head'

interface Props {
    
}

export default function testFont({}: Props): ReactElement {
  return (
    <div className={Theme.overlay}>
      <div className={Theme.center}>
        <Head>
        <title>test</title>
        <meta name="description" content="liff login" />
        <link rel="icon" href="/fashion.png" />
        {/* <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script> */}
        </Head>
        <div>
          <h1 className={Theme.boldText}>Heading1-36px</h1>
          <h2 className={Theme.boldText}>Heading2-28px</h2>
          <h3 className={Theme.boldText}>Heading3-24px</h3>
          <h4 className={Theme.boldText}>Heading4-20px</h4>
          <h5 className={Theme.boldText}>Heading5-18px</h5>
          <h6 className={Theme.boldText}>Heading6-16px</h6>
          <a>--------------------------------------------</a>
          <h1 className={Theme.bodyText}>Content1-36px</h1>
          <h2 className={Theme.bodyText}>Content2-28px</h2>
          <h3 className={Theme.bodyText}>Content3-24px</h3>
          <h4 className={Theme.bodyText}>Content4-20px</h4>
          <h5 className={Theme.bodyText}>Content5-18px</h5>
          <h6 className={Theme.bodyText}>Content6-16px</h6>
        </div>
      </div>
    </div>
  )
}
