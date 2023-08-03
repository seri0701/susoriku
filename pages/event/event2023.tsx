import type { NextPage } from "next"
import Head from "next/head"

import { Image, Space } from "@mantine/core"

import HeaderCom from "../../components/FixedElement/SubHeader/HeaderCom"
import FooterCom from "../../components/FixedElement/FooterCom"
import { Layout } from "../../components/FixedElement/Layout"

import EventCom from "components/Organisms/EventCom"

const EVENT_ITEMS2023 = [
  { Entry: "", Month: 4, Day: 2, Event: "東部春季記録会" },
  { Entry: "", Month: 4, Day: 23, Event: "静岡リレーカーニバル" },
  { Entry: "", Month: 5, Day: 3, Event: "静岡国際陸上" },
  { Entry: "◯", Month: 5, Day: 6, Event: "沼津市陸上選手権大会" },
  { Entry: "◯", Month: 5, Day: 20, Event: "長泉町陸上記録会" },
  { Entry: "◯", Month: 5, Day: 28, Event: "御殿場陸上選手権" },
  { Entry: "", Month: 6, Day: 11, Event: "小学生チャレンジカップ" },
  { Entry: "", Month: 7, Day: 1, Event: "全国小学生交流大会県予選" },
  {
    Entry: "◯",
    Month: 7,
    Day: 15,
    Event: "富士裾野トラックミート（陸上交流会）",
  },
  { Entry: "", Month: 7, Day: 29, Event: "東部陸上カーニバル" },
  { Entry: "", Month: 8, Day: 26, Event: "東海小学生陸上大会（三重）" },
  { Entry: "", Month: 8, Day: 26, Event: "全国小学生陸上大会(横浜）" },
  { Entry: "◯", Month: 9, Day: 23, Event: "三島市陸上記録会" },
  { Entry: "", Month: 10, Day: 1, Event: "静岡県小学生選手権" },
  { Entry: "◯", Month: 10, Day: 28, Event: "裾野市陸上選手権" },
  {
    Entry: "◯",
    Month: 12,
    Day: 10,
    Event: "富士裾野ディスタンス（長距離記録会）",
  },
  { Entry: "◯", Month: 1, Day: 1, Event: "深良元旦マラソン・駅伝" },
  { Entry: "◯", Month: 1, Day: 21, Event: "裾野市駅伝" },
]

const Event2023: NextPage = () => {
  return (
    <>
      <Layout title="年間行事予定">
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderCom Color="" Caption="年間行事予定" />
        <Image src="/menstart.webp" alt="裾野市陸上教室" fit="contain" />
        <Space h="xs" />
        <EventCom EVENT_ITEMS={EVENT_ITEMS2023} />
      </Layout>
      <FooterCom />
    </>
  )
}

export default Event2023