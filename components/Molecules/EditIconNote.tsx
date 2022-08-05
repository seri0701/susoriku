import { FC, useEffect, useState } from 'react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { supabase } from 'utils/supabase'
import useStore from 'store'
import { useMutateNote } from 'hooks/useMutateNote'
import { Note } from 'types/types'

export const EditIconNote: FC<
  Omit<Note, 'created_at' | 'note_id' | 'comments'>
> = ({ id, title, content, user_id }) => {
  const [userId, setUserId] = useState<string | undefined>('')
  const update = useStore((state) => state.updateEditedNote)
  const { deleteNoteMutation } = useMutateNote()
  useEffect(() => {
    setUserId(supabase.auth.user()?.id)
  }, [])
  return (
    <>
      {userId === user_id && (
        <div className="float-right ml-20 flex">
          <PencilAltIcon
            className="mx-1 h-5 w-5 cursor-pointer text-blue-200"
            onClick={() => {
              update({
                id: id,
                title: title,
                content: content,
              })
            }}
          />
          <TrashIcon
            className="h-5 w-5 cursor-pointer text-blue-200"
            onClick={() => {
              deleteNoteMutation.mutate(id)
            }}
          />
        </div>
      )}
    </>
  )
}
