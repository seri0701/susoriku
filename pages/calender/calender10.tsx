import type { NextPage } from "next"
import Head from "next/head"

import HeaderCom from "../../components/FixedElement/SubHeader/HeaderCom"
import FooterCom from "../../components/FixedElement/FooterCom"
import { Layout } from "../../components/FixedElement/Layout"

import { MonthCalenderCom } from "../../components/Organisms/MonthCalendarCom"
import { HeaderNavi } from "components/FixedElement/MainHeader/HeaderNavi"

const Date = [
  { Day: 4, Venue: "火", Hour: 17, Minute: 30 },
  { Day: 6, Venue: "木", Hour: 17, Minute: 30 },
  { Day: 7, Venue: "金", Hour: 18, Minute: "00" },
  { Regular: "定期", Day: 8, Venue: "土", Hour: 18, Minute: "00" },
  { Day: 12, Venue: "水", Hour: 17, Minute: 30 },
  { Regular: "定期", Day: 13, Venue: "木", Hour: 18, Minute: "00" },
  { Day: 18, Venue: "火", Hour: 17, Minute: 30 },
  { Day: 20, Venue: "木", Hour: 17, Minute: 30 },
  { Day: 21, Venue: "金", Hour: 18, Minute: "00" },
  { Regular: "定期", Day: 22, Venue: "土", Hour: 9, Minute: "00" },
  { Day: 25, Venue: "火", Hour: 17, Minute: 30 },
  { Day: 26, Venue: "水", Hour: 17, Minute: 30 },
  { Regular: "定期", Day: 27, Venue: "木", Hour: 18, Minute: "00" },
]

const Calender10: NextPage = () => {
  return (
    <>
      <Layout title="10月練習予定">
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderNavi />
        <HeaderCom Color="" Caption="10月練習予定" />
        <MonthCalenderCom CALENDER_ITEMS={Date} />
        <FooterCom />
      </Layout>
    </>
  )
}

export default Calender10