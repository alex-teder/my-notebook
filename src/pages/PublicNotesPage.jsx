import {NoteList} from '../components/notes/NoteList'
import {MainLayoutWrapper} from '../components/layout/MainLayoutWrapper'
import {mockNotes} from '../utils/mockNotes'

export function PublicNotesPage() {
  return (
    <MainLayoutWrapper>
      <h1>Public notes</h1>
      <NoteList notes={mockNotes} />
    </MainLayoutWrapper>
  )
}
