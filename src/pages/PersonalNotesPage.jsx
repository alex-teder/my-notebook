import {NoteList} from '../components/notes/NoteList'
import {MainLayoutWrapper} from '../components/layout/MainLayoutWrapper'
import {mockNotes} from '../utils/mockNotes'

export function PersonalNotesPage() {
  return (
    <MainLayoutWrapper>
      <h1>Personal notes</h1>
      <NoteList notes={mockNotes} />
    </MainLayoutWrapper>
  )
}
