import type { NextPage } from "next"

import { Text } from "@mantine/core"

import HeaderCom from "components/FixedElement/SubHeader/HeaderCom"
import FooterCom from "components/FixedElement/FooterCom"
import { Layout } from "components/FixedElement/Layout"
import { HeaderNavi } from "components/FixedElement/MainHeader/HeaderNavi"

const Plan: NextPage = () => {
  return (
    <>
      <Layout title="方針">
        <meta
          name="google-site-verification"
          content="Qsv-aaCpuXDB2Xem4vIgTXcOco914A7epqBo6qJP9IQ"
        />
        <HeaderNavi />
        <HeaderCom Caption="" Color="gray" />
        <Text size="xl" color="blue" align="center">
          裾野市陸上教室の方針
        </Text>
        <Text className="mx-2">
          　グループ活動の中での良い友達づくりやマナーの涵養を図る。あらゆるスポーツの基本とされる「走る」「跳ぶ」「投げる」ことを正しく学び、陸上競技のみならず多くのスポーツに親しみを持ち、裾野市のスポーツ界の底辺拡大を図り、小学生及び中学生の健全なる心身育成の一端とする。
        </Text>
        <FooterCom />
      </Layout>
    </>
  )
}

export default Plan
