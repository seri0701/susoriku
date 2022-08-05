import { FC, useEffect, useState } from 'react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { supabase } from 'utils/supabase'
import useStore from 'store'
import { useMutateComment } from 'hooks/useMutateComment'
import { Comment } from 'types/types'

export const EditIconComment: FC<Omit<Comment, 'created_at' | 'note_id'>> = ({
  id,
  content,
  user_id,
}) => {
  const [userId, setUserId] = useState<string | undefined>('')
  const update = useStore((state) => state.updateEditedComment)
  const { deleteCommentMutation } = useMutateComment()
  useEffect(() => {
    setUserId(supabase.auth.user()?.id)
  }, [])
  return (
    <>
      {userId === user_id && (
        <div className="float-right ml-20 flex">
          <PencilAltIcon
            className="mx-1 h-5 w-5 cursor-pointer text-blue-400"
            onClick={() => {
              update({
                id: id,
                content: content,
              })
            }}
          />
          <TrashIcon
            className="h-5 w-5 cursor-pointer text-blue-400"
            onClick={() => {
              deleteCommentMutation.mutate(id)
            }}
          />
        </div>
      )}
    </>
  )
}
