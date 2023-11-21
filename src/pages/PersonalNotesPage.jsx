import {NoteList} from '../components/NoteList'
import {MainLayoutWrapper} from '../components/MainLayoutWrapper'
import {mockNotes} from '../utils/mockNotes'

export function PersonalNotesPage() {
  return (
    <MainLayoutWrapper>
      <h1>Personal notes</h1>
      <NoteList notes={mockNotes} />
    </MainLayoutWrapper>
  )
}
