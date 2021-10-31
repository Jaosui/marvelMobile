import React, { ReactElement } from "react";
import Theme from "../styles/Theme.module.css";
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
// import liff from '@line/liff';
// import { LiffCore } from '@line/liff/dist/lib/liff'
// import { LiffModules } from '@line/liff/dist/lib/core'

// declare global {
//   interface Window {
//     liff: LiffCore & LiffModules
//   }
// }
// declare global { interface Window { liff: any; } }

export default function Index(): ReactElement {
  // let liff = window.liff;
  const [displayName, setDisplayName] = React.useState(null)
  const [pictureUrl, setPictureUrl] = React.useState(null)
  const [statusMessage, setStatusMessage] = React.useState(null)
  // const [userId, setUserId] = React.useState(null)
  // liff.init({ liffId: '1656495478-Al05oEgX' })
  const liffId = '1656495478-Al05oEgX'
  React.useEffect(() => {
    const initId = async() => {
      const liff = (await import('@line/liff')).default
      try {
        await liff.init({ liffId });
      } catch (error) {
        console.error('liff init error', error.message)
      }
        if (liff.isLoggedIn()) {
          const runApp = () => {
          const idToken = liff.getIDToken();
          console.log(idToken)
          liff.getProfile().then((profile: { displayName: any; pictureUrl: any; statusMessage: any; userId: any; }) => {
            console.log(profile);
            setDisplayName(profile.displayName)
            setPictureUrl(profile.pictureUrl)
            setStatusMessage(profile.statusMessage)
            // setUserId(profile.userId)
          }).catch((err: any) => console.error(err));
        }
          runApp();
        console.log('เข้าสู่ระบบแล้ว')
        } else {
          liff.login();
          console.log('ยังไม่เข้าสู่ระบบ')
        }
    }
    initId()
  }, [])

  const logout = async () => {
    const liff = (await import('@line/liff')).default
    await liff.ready
    liff.logout();
    location.reload();
  }

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className={Theme.overlay}>
      <div className={Theme.center}>
        <Head>
        <title>test</title>
        <meta name="description" content="liff login" />
        <link rel="icon" href="/fashion.png" />
        {/* <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script> */}
        </Head>
        {/* <img src="https://sites.google.com/site/funnycatmeawww/_/rsrc/1422326075261/home/6997052-funny-cat.jpg?height=170&width=300" alt="W3Schools.com" /> */}
        <Image
          loader={myLoader}
          // src="https://sites.google.com/site/funnycatmeawww/_/rsrc/1422326075261/home/6997052-funny-cat.jpg"
          src= {`${pictureUrl}`}
          alt={`${displayName}`}
          width={300}
          height={300}
        />
        {/* <h1 style={{color: "white"}}>pathImg: { pictureUrl }</h1> */}
        <h1 style={{color: "white"}}>displayName: { displayName }</h1>
        <h1 style={{color: "white"}}>statusMessage: { statusMessage }</h1>
        {/* {pictureUrl && pictureUrl.map((item: any, index )=><h1 key={index} style={{color: "white"}}>pathImg: { item }</h1>)}
        {displayName && displayName.map((item: any, index )=><h1 key={index} style={{color: "white"}}>displayname: { item }</h1>)}
        {statusMessage && statusMessage.map((item: any, index )=><h1 key={index} style={{color: "white"}}>statusMessage: { item }</h1>)}
        */}
        <Button
            type="primary"
            icon={<LogoutOutlined />}
            onClick={logout}
          />
      </div>
    </div>
    
  )
}
