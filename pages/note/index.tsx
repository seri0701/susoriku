import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { supabase } from '../../utils/supabase'
import { NoteForm } from '../../components/NoteForm'
import { NoteItem } from '../../components/NoteItem'
import { Note } from '../../types/types'
import { LayoutBlack } from 'components/FixedElement/LayoutBlack'
import { LogoutButtonIndigo } from 'components/Atom/LogoutButtonIndigo'
import { TopButton } from 'components/Atom/TopButton'

export const getStaticProps: GetStaticProps = async () => {
  console.log('ISR invoked - notes page')
  const { data: notes, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) {
    throw new Error(`${error.message}: ${error.details}`)
  }
  return {
    props: { notes },
    revalidate: false,
  }
}
type StaticProps = {
  notes: Note[]
}
const Notes: NextPage<StaticProps> = ({ notes }) => {
  return (
    <LayoutBlack title="Notes">
      <LogoutButtonIndigo />
      <NoteForm />
      <ul className="my-2">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            user_id={note.user_id}
          />
        ))}
      </ul>
      <TopButton />
    </LayoutBlack>
  )
}

export default Notes
