import { FC } from 'react'
import { Comment } from '../types/types'
import { Container } from '@mantine/core'
import { EditIconComment } from './Molecules/EditIconComment'

export const CommentItem: FC<Omit<Comment, 'created_at' | 'note_id'>> = ({
  id,
  content,
  user_id,
}) => {
  return (
    <Container
      sx={{ borderTop: '1px solid gray' }}
      className="my-0 bg-slate-200 px-3 py-1"
    >
      <div>
        <span>{content}</span>
        <EditIconComment key={id} id={id} content={content} user_id={user_id} />
      </div>
    </Container>
  )
}
