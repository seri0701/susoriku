import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../../components/FixedElement/Layout'
import HeaderCom from '../../components/FixedElement/HeaderCom'
import FooterCom from '../../components/FixedElement/FooterCom'
import Calender from '../../components/CalendarCom'

const JULY_ITEMS = [{ Day: 1, Hour: 18, Minute: '00', Venue: '競技場' }]

const Calender07: NextPage = () => {
  return (
    <>
      <Layout title="７月練習予定">
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderCom />
        <Calender CALENDER_ITEMS={JULY_ITEMS} />
      </Layout>
      <FooterCom />
    </>
  )
}

export default Calender07