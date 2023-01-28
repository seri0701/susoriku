import type { NextPage } from "next"
import Head from "next/head"

// import { Text } from '@mantine/core'

import HeaderCom from "../../components/FixedElement/SubHeader/HeaderCom"
import FooterCom from "../../components/FixedElement/FooterCom"
import { Layout } from "../../components/FixedElement/Layout"

import Calender from "../../components/Organisms/CalendarCom"
import { HeaderNavi } from "components/FixedElement/MainHeader/HeaderNavi"

const Date = [
  { Day: "7/23", Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: 28, Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: "8/3", Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: 13, Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: 20, Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: 27, Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: "9/3", Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: 10, Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: 17, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 21, Hour: 18, Minute: "00", Venue: "競技場 ⭐️" },
  { Day: 30, Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: "10/8", Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: 13, Hour: 18, Minute: "00", Venue: "競技場 ⭐️" },
  { Day: 22, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 27, Hour: 18, Minute: "00", Venue: "競技場 ⭐️" },
  { Day: "11/5", Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 12, Hour: 18, Minute: "00", Venue: "競技場" },
  { Day: 19, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 26, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: "12/10", Hour: 9, Minute: "00", Venue: "多目的広場" },
  { Day: 17, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 24, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: "1/7", Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 21, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 28, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: "2/4", Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 11, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 18, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 25, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: "3/4", Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 11, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 18, Hour: 9, Minute: "00", Venue: "競技場" },
  { Day: 25, Hour: 9, Minute: "00", Venue: "競技場" },
]

const Regular: NextPage = () => {
  return (
    <>
      <Layout title="定期練習練習予定">
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderNavi />
        <HeaderCom Color="" Caption="定期練習予定" />
        <Calender CALENDER_ITEMS={Date} />
        {/* <Text
          sx={{
            color: '#0251d1',
          }}
        >
          教室体験は上記日程でお気軽にお越しください。
        </Text> */}
      </Layout>
      <FooterCom />
    </>
  )
}

export default Regular
