import type { NextPage } from "next"
import Head from "next/head"

import { Layout } from "../components/FixedElement/LayoutMain"

import PostListCom from "components/Organisms/PostListCom"
import { Space } from "@mantine/core"

const Home: NextPage = () => {
  return (
    <>
      <Layout title="裾野市陸上教室" image="raceimg.webp">
        <Head>
          <meta
            name="google-site-verification"
            content="Qsv-aaCpuXDB2Xem4vIgTXcOco914A7epqBo6qJP9IQ"
          />
          <meta
            name="裾野市陸上教室"
            content="裾野、御殿場の児童を中心に活動する陸上教室"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Space h="sm" />
        <PostListCom />
      </Layout>
    </>
  )
}

export default Home
