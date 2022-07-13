import { Anchor, Text } from '@mantine/core'

type Props = {
  title: string
  description: string
  link: string
}

const IndexCardCom = (props: Props) => {
  return (
    <Anchor
      href={props.link}
      // target="_blank"
      className="mt-0 rounded-xl border p-6 pt-2 pb-2 text-left hover:text-blue-600 focus:text-blue-600"
    >
      <Text component="h2" className="text-left text-2xl font-bold">
        {props.title}
      </Text>
      <Text component="p" className="text-md text-left">
        {props.description}
      </Text>
    </Anchor>
  )
}

export default IndexCardCom
