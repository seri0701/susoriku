import type { NextPage } from "next"
import Head from "next/head"

import HeaderCom from "../../components/FixedElement/SubHeader/HeaderCom"
import FooterCom from "../../components/FixedElement/FooterCom"
import { Layout } from "../../components/FixedElement/Layout"

import { MonthCalenderCom } from "../../components/Organisms/MonthCalendarCom"
import { HeaderNavi } from "components/FixedElement/MainHeader/HeaderNavi"

const Date = [
  { Day: 2, Venue: "火", Hour: 17, Minute: 30 },
  { Day: 4, Venue: "木", Hour: 17, Minute: 30 },
  { Regular: "沼津選手権", Day: 6, Venue: "土", Hour: 7, Minute: "00" },
  { Day: 9, Venue: "火", Hour: 17, Minute: 30 },
  { Day: 11, Venue: "木", Hour: 17, Minute: 30 },
  { Day: 12, Venue: "金", Hour: 17, Minute: 30 },
  { Regular: "定期", Day: 13, Venue: "土", Hour: 9, Minute: "00" },
  { Day: 16, Venue: "火", Hour: 17, Minute: 30 },
  { Regular: "定期", Day: 18, Venue: "木", Hour: 18, Minute: "00" },
  { Regular: "長泉記録会", Day: 20, Venue: "土", Hour: 7, Minute: "00" },
  { Day: 23, Venue: "火", Hour: 17, Minute: 30 },
  { Regular: "定期", Day: 25, Venue: "木", Hour: 18, Minute: "00" },
  { Day: 30, Venue: "火", Hour: 17, Minute: 30 },
]

const Calender5: NextPage = () => {
  return (
    <>
      <Layout title="5月練習予定">
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderNavi />
        <HeaderCom Color="" Caption="5月練習予定" />
        <MonthCalenderCom CALENDER_ITEMS={Date} />
        <FooterCom />
      </Layout>
    </>
  )
}

export default Calender5