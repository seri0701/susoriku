import type { NextPage } from 'next'

import { Accordion, Text } from '@mantine/core'

import HeaderCom from 'components/FixedElement/HeaderCom'
import FooterCom from 'components/FixedElement/FooterCom'
import { Layout } from 'components/FixedElement/Layout'

const Date = [
  {
    Title: '８月２週目 助走距離を合わせる',
    Content: '助走３歩目に第２マークを置こう',
  },
  {
    Title: '８月３週目（１） 踏切角度と一歩前',
    Content:
      '踏切角度を静的に覚え、支持足への乗り込みと振り上げ足の蹴り出しを覚える。低重心での歩行を行い一歩前転がしと蹴り出しを覚える。一歩前から踏切までをゆっくり行う。',
  },
  {
    Title: '８月３週目（２） 踏切ドリル',
    Content: '踏切ドリル２歩、４歩、ジャンプスキップ、短助走による練習',
  },
  {
    Title: '８月４週目 通常練習',
    Content: '踏切ドリルと短助走を準備運動に落とし、全助走による練習',
  },
  {
    Title: '９月１週目 バウンディングとホッピング左右',
    Content:
      'グラグラせず力の入る場所を探す。けんけんからのホッピング、短助走、全助走',
  },
  {
    Title: '９月２週目 腕振りドリル',
    Content: '腕振りのドリル後、全助走による練習',
  },
  { Title: '９月３週目 試技間の過ごし方', Content: 'お試し記録会' },
  {
    Title: '雨天時',
    Content:
      '屋根の下でジャンプドリル、階段で腕振りだけで登るジャンプ、バウンディング',
  },
]

const Plan: NextPage = () => {
  return (
    <>
      <Layout title="走り幅跳び練習内容">
        <HeaderCom Caption="走り幅跳び練習内容" Color="" />
        <Text size="xl" color="maroon" align="center">
          9/23　東部小学生大会までの練習内容です。
        </Text>
        {Date.map((item: any) => {
          return (
            <Accordion
              key={item.Title}
              sx={{
                borderTop: '1px solid #eaeaea',
              }}
            >
              <Accordion.Item label={item.Title}>{item.Content}</Accordion.Item>
            </Accordion>
          )
        })}
        <FooterCom />
      </Layout>
    </>
  )
}

export default Plan
