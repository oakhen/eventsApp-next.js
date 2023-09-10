import Layout from "@/components/layout/layout"
import "@/styles/globals.css"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="Find events that fits your schedule"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* we use this so our application should scale well */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
