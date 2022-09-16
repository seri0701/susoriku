import type { NextPage } from "next"

import { Accordion } from "@mantine/core"

import HeaderCom from "components/FixedElement/SubHeader/HeaderCom"
import FooterCom from "components/FixedElement/FooterCom"
import { Layout } from "components/FixedElement/Layout"

const Date = [
  {
    Title: "助走距離を合わせる",
    Content: "助走３歩目に第２マークを置こう",
  },
  {
    Title: "踏切角度と一歩前",
    Content:
      "踏切角度をゆっくりした動作で覚え、支持足への乗り込みと振り上げ足の蹴り出しを覚える。低重心での歩行を行い一歩前転がしと蹴り出しを覚える。腕振りを使い全身で踏み切る。",
  },
  {
    Title: "踏切ドリル",
    Content: "踏切ドリル２歩、４歩、短助走による練習",
  },
  {
    Title: "バウンディングとホッピング左右",
    Content:
      "グラグラせず力の入る場所を探す。けんけんからのホッピング、短助走、全助走",
  },
  {
    Title: "腕振りドリル",
    Content: "腕振りのドリル後、全助走による練習",
  },
  {
    Title: "試技間の過ごし方",
    Content: "次の試技で身体が動くように上手に過ごそう。",
  },
  {
    Title: "雨天時",
    Content:
      "屋根の下でジャンプドリル、階段で腕振りだけで階段を登るジャンプ、バウンディング",
  },
]

const Plan: NextPage = () => {
  return (
    <>
      <Layout title="走り幅跳び練習内容">
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
        <FooterCom />
      </Layout>
    </>
  )
}

export default Plan
