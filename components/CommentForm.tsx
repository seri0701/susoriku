import { FormEvent, FC } from 'react'
import { supabase } from '../utils/supabase'
import useStore from '../store'
import { useMutateComment } from '../hooks/useMutateComment'
import { Center, Textarea } from '@mantine/core'

export const CommentForm: FC<{ noteId: string }> = ({ noteId }) => {
  const { editedComment } = useStore()
  const update = useStore((state) => state.updateEditedComment)
  const { createCommentMutation, updateCommentMutation } = useMutateComment()
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedComment.id === '') {
      createCommentMutation.mutate({
        content: editedComment.content,
        user_id: supabase.auth.user()?.id,
        note_id: noteId,
      })
    } else {
      updateCommentMutation.mutate({
        id: editedComment.id,
        content: editedComment.content,
      })
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <Textarea
        mb="md"
        minRows={6}
        placeholder="メッセージ入力"
        onChange={(e) => update({ ...editedComment, content: e.target.value })}
      />
      <Center>
        <button
          type="submit"
          className="ml-2 rounded bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          {editedComment.id ? 'Update' : '投稿'}
        </button>
      </Center>
    </form>
  )
}
