import { FC } from 'react'
import { Card, Text, Badge, Group } from '@mantine/core'

type Props = {
  title: string
  content: string
  status: string
  postUrl: string
}
export const PostCard: FC<Props> = ({ title, content, status, postUrl }) => {
  return (
    <Card className="bg-slate-200">
      <Group position="apart" my="md">
        <Text weight={800}>{title}</Text>
        <Badge color="pink" radius="lg" variant="filled">
          {status}
        </Badge>
      </Group>
      <Text size="sm">{content}</Text>
    </Card>
  )
}
