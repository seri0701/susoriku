import type { NextPage } from "next"
import Image from "next/image"
import { Box, Space, Text } from "@mantine/core"
import { GrayLine } from "components/Atom/GrayLine"

const FooterCom: NextPage = () => {
  return (
    <>
      <GrayLine />
      <Box
        component="footer"
        className=" m-2 flex h-16 items-center justify-center"
      >
        <Text>©︎裾野市陸上教室</Text>
      </Box>
    </>
  )
}

export default FooterCom
