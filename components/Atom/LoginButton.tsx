import { Anchor, Center, Text } from '@mantine/core'
import { Login } from 'tabler-icons-react'

export const LoginButton = () => {
  return (
    <Center className="py-5">
      <Anchor href="/edit">
        <Center>
          <Login />
        </Center>
        <Text>書き込みはログイン</Text>
      </Anchor>
    </Center>
  )
}
