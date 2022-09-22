import type { NextPage } from "next"

import { Accordion, Anchor, Text } from "@mantine/core"

import HeaderCom from "components/FixedElement/SubHeader/HeaderCom"
import FooterCom from "components/FixedElement/FooterCom"
import { Layout } from "components/FixedElement/Layout"

const Date = [
  {
    Title: "助走",
    Content:
      "踏切を気にしたり疲れて楽に助走をしたり、毎回違う気持ちで走り出すと、スタートの一歩目から歩幅が毎回違ってしまうので気を付ける。",
  },
  {
    Title: "助走２",
    Content: "踏切手前で一番速い速度になるように走ってくる。",
  },
  {
    Title: "助走距離を合わせる",
    Content: "助走３歩目に第２マークを置く",
  },
  {
    Title: "助走距離を合わせる2",
    Content: "スタートは記憶して、助走６歩目と踏切４歩前にマークを置く",
  },
  {
    Title: "踏切角度",
    Content:
      "踏切角度は３０度くらい。まずは窓などに映る自分を見て、次にゆっくり踏切動作をして覚える。このとき踏切足の膝は曲げずに足の裏全体で着くようにする。",
  },
  {
    Title: "踏切手前から踏切まで",
    Content:
      "４歩前で最終的な助走距離を合わせる　３歩前で少し重心を下げる　２歩前でぐっと前に身体を押し出す　１歩前で引き上げる足をつま先で蹴り出す　踏切足を伸ばして足の裏全体をついて体重を乗せていき、１歩前で蹴り出した足を飛びたい方向に出す。身体を持ち上げるように腕を振り全身で踏み切る。",
  },
  {
    Title: "踏切のリズム",
    Content: "- ♪ ♩ ♪ ♪ 　　ンタタンタタン　　　原、点、回、避！",
  },
  {
    Title: "試技間の過ごし方",
    Content:
      "身体が冷えないように気をつけよう。ジャンプや腿上げ、腕を回したりして身体が動くようにしておく。",
  },
  {
    Title: "試技間の過ごし方（中学生）",
    Content:
      "跳躍→シューズを履き替える→ジャージを着る→踏切ドリル→疲れていればジョグで身体を温めるだけ→順番を確認する→体操や動的なストレッチ→スパイクを履く→ジャージを脱ぐ→流し→跳躍　雨の日は無理して屋根から出ず、冷えないように気をつけよう。",
  },
  {
    Title: "雨天時の練習",
    Content:
      "屋根の下でジャンプドリル、階段で腕振りだけで階段を登るジャンプ、バウンディング、ホッピング",
  },
]
const ModelLink = [
  {
    Title: "踏切ドリル１",
    Href: "https://www.youtube.com/watch?v=iZm0nRtfPs8",
  },
  {
    Title: "踏切ドリル（ギャロップ）",
    Href: "https://www.youtube.com/watch?v=efJbqsio6J4",
  },
  {
    Title: "踏切の姿勢",
    Href: "https://www.youtube.com/watch?v=p1Lbskr-vbQ",
  },
  {
    Title: "バウンディング苦手な人へ",
    Href: "https://www.youtube.com/watch?v=sgph2UjPna8",
  },

  {
    Title: "反り跳びの見本１",
    Href: "https://youtu.be/l6NwuAsyQ88",
  },
  {
    Title: "反り跳びの見本２",
    Href: "https://m.youtube.com/watch?time_continue=7&v=S4ApLHFg8qc&feature=emb_logo",
  },
  {
    Title: "はさみ跳びの見本",
    Href: "https://youtu.be/HLkksNVSnuM",
  },
  {
    Title: "かがみ跳びの見本",
    Href: "https://www.jaaf.or.jp/files/upload/202003/jhs-003-007.pdf",
  },
]

const Plan: NextPage = () => {
  return (
    <>
      <Layout title="走り幅跳び練習内容">
        <meta
          name="google-site-verification"
          content="Qsv-aaCpuXDB2Xem4vIgTXcOco914A7epqBo6qJP9IQ"
        />
        <HeaderCom Caption="走り幅跳び練習内容" Color="gray" />
        {Date.map((item: any) => {
          return (
            <Accordion
              key={item.Title}
              sx={{
                borderTop: "1px solid #eaeaea",
              }}
            >
              <Accordion.Item value={item.Title}>
                <Accordion.Control>{item.Title}</Accordion.Control>
                <Accordion.Panel>{item.Content}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          )
        })}
        {ModelLink.map((item: any) => {
          return (
            <Anchor
              key={item.Title}
              href={item.Href}
              className="mt-0 rounded-xl border p-6 pt-2 pb-2 text-left"
            >
              <Text className="text-xl font-bold">{item.Title}</Text>
            </Anchor>
          )
        })}

        <FooterCom />
      </Layout>
    </>
  )
}

export default Plan
