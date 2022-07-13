import type { NextPage } from 'next'
import Head from 'next/head'

import { Text } from '@mantine/core'

import HeaderCom from '../../components/FixedElement/HeaderCom'
import FooterCom from '../../components/FixedElement/FooterCom'
import { Layout } from '../../components/FixedElement/Layout'

import Calender from '../../components/Organisms/CalendarCom'

const Date = [
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
  { Day: 1, Hour: 18, Minute: '00', Venue: '競技場' },
]

const Regular: NextPage = () => {
  return (
    <>
      <Layout title="定期練習練習予定">
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderCom />
        <Calender CALENDER_ITEMS={Date} />
        <Text
          sx={{
            color: '#0251d1',
          }}
        >
          教室体験は上記日程でお気軽にお越しください。
        </Text>
      </Layout>
      <FooterCom />
    </>
  )
}

export default Regular
