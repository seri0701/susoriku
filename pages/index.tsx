import type { NextPage } from 'next'
import Head from 'next/head'

import HeaderCom from '../components/FixedElement/HeaderCom'
import FooterCom from '../components/FixedElement/FooterCom'
import { Layout } from '../components/FixedElement/Layout'

import IndexCom from 'components/Organisms/IndexCom'

const Home: NextPage = () => {
  return (
    <>
      <Layout title="裾野市陸上教室">
        <Head>
          <meta
            name="裾野市陸上教室"
            content="裾野、御殿場の児童を中心に活動する陸上教室"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderCom Color="" Caption="Get started by training" />
        <IndexCom />
      </Layout>
      <FooterCom />
    </>
  )
}

export default Home
