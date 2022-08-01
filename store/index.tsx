import { Session } from '@supabase/supabase-js'
import create from 'zustand'
import { EditedNote, EditedComment } from '../types/types'

type State = {
  session: Session | null
  setSession: (payload: Session | null) => void
  editedNote: EditedNote
  editedComment: EditedComment
  updateEditedNote: (payload: EditedNote) => void
  updateEditedComment: (payload: EditedComment) => void
  resetEditedNote: () => void
  resetEditedComment: () => void
}
const useStore = create<State>((set, _) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  editedNote: { id: '', title: '', content: '' },
  editedComment: { id: '', content: '' },
  updateEditedNote: (payload) =>
    set({
      editedNote: {
        id: payload.id,
        title: payload.title,
        content: payload.content,
      },
    }),
  resetEditedNote: () =>
    set({ editedNote: { id: '', title: '', content: '' } }),
  updateEditedComment: (payload) =>
    set({
      editedComment: {
        id: payload.id,
        content: payload.content,
      },
    }),
  resetEditedComment: () => set({ editedComment: { id: '', content: '' } }),
}))
export default useStore
