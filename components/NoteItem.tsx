import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { supabase } from '../utils/supabase'
import useStore from '../store'
import { useMutateNote } from '../hooks/useMutateNote'
import { Note } from '../types/types'
import { EditIconNote } from './Molecules/EditIconNote'

export const NoteItem: FC<
  Omit<Note, 'created_at' | 'note_id' | 'comments'>
> = ({ id, title, content, user_id }) => {
  const [userId, setUserId] = useState<string | undefined>('')
  const update = useStore((state) => state.updateEditedNote)
  const { deleteNoteMutation } = useMutateNote()
  useEffect(() => {
    setUserId(supabase.auth.user()?.id)
  }, [])
  return (
    <li className="my-3">
      <Link href={`/note/${id}`} prefetch={false}>
        <a className="cursor-pointer text-blue-200 hover:text-pink-600">
          {title}
        </a>
      </Link>
      <EditIconNote id={id} title={title} content={content} user_id={user_id} />
    </li>
  )
}
