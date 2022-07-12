import type { NextPage } from 'next'
import { Anchor, Text } from '@mantine/core'

const HeaderCom: NextPage = () => {
  return (
    <>
      <Anchor href="/">
        <Text
          sx={{
            color: '#0070f3',
            fontSize: '2rem',
            '@media (min-width: 800px)': {
              fontSize: '3rem',
            },
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          className="mt-6"
        >
          裾野市陸上教室
        </Text>
      </Anchor>

      <Text
        sx={{
          color: 'black',
          fontSize: '0.9rem',
          '@media (min-width: 700px)': {
            fontSize: '1.2rem',
          },
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        Get started by training
      </Text>
    </>
  )
}

export default HeaderCom
