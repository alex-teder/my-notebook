import {NoteList} from '/src/components/notes/NoteList'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {mockNotes} from '/src/utils/mockNotes'

export function PublicNotesPage() {
  return (
    <MainLayoutWrapper>
      <h1>Public notes</h1>
      <NoteList notes={mockNotes} favable />
    </MainLayoutWrapper>
  )
}
