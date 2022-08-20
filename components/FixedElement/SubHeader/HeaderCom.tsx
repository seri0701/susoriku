import { FC } from 'react'
import { Anchor, Text } from '@mantine/core'

type Props = {
  Color: string
  Caption: string
}

const HeaderCom: FC<Props> = ({ Color, Caption }) => {
  const HeaderColor = Color ? Color : '#0070f3'
  const HeaderCaption = Caption ? Caption : ''

  return (
    <>
      <Anchor href="/">
        <Text
          sx={{
            color: HeaderColor,
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
        {HeaderCaption}
      </Text>
    </>
  )
}

export default HeaderCom
