import type { NextPage } from "next"
import Head from "next/head"

import { Layout } from "../components/FixedElement/LayoutMain"

import IndexCom from "components/Organisms/IndexCom"

const about: NextPage = () => {
  return (
    <>
      <Layout title="裾野市陸上教室" image="raceimg.webp">
        <Head>
          <meta
            name="裾野市陸上教室"
            content="裾野、御殿場の児童を中心に活動する陸上教室"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <IndexCom />
      </Layout>
    </>
  )
}

export default about
