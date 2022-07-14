import type { NextPage } from 'next'

import { Text } from '@mantine/core'

import HeaderCom from 'components/FixedElement/HeaderCom'
import FooterCom from 'components/FixedElement/FooterCom'
import { Layout } from 'components/FixedElement/Layout'

const Plan: NextPage = () => {
  return (
    <>
      <Layout title="裾野市陸上教室">
        <HeaderCom Caption="" Color="gray" />
        <Text size="xl" color="maroon" align="center">
          裾野市陸上教室の方針
        </Text>
        <Text color="dark" className="mx-2">
          　グループ活動の中での良い友達づくりやマナーの涵養を図る。あらゆるスポーツの基本とされる「走る」「跳ぶ」「投げる」ことを正しく学び、陸上競技のみならず多くのスポーツに親しみを持ち、裾野市のスポーツ界の底辺拡大を図り、小学生及び中学生の健全なる心身育成の一端とする。
        </Text>
        <FooterCom />
      </Layout>
    </>
  )
}

export default Plan
