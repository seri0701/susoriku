import type { NextPage } from 'next'
import Image from 'next/image'
import { Box, Text } from '@mantine/core'

const FooterCom: NextPage = () => {
  return (
    <Box
      component="footer"
      className="flex"
      sx={{
        display: 'flex',
        flex: '1',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>©︎陸上教室</Text>
    </Box>
  )
}

export default FooterCom
