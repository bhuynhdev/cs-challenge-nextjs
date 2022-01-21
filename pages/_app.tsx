import type { AppProps } from 'next/app'
import  Head  from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
