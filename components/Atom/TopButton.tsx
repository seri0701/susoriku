import { Anchor, Center, Text } from '@mantine/core'
import { DeviceDesktop } from 'tabler-icons-react'

export const TopButton = () => {
  return (
    <Center className="py-5">
      <Anchor href="/">
        <Center>
          <DeviceDesktop />
        </Center>
        <Text>最初のページへ</Text>
      </Anchor>
    </Center>
  )
}
