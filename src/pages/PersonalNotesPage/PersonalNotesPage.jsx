import {NoteList} from '/src/components/notes/NoteList'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {mockNotes} from '/src/utils/mockNotes'
import {NewNoteButton} from '/src/components/NewNoteButton'
import s from './PersonalNotesPage.module.scss'

export function PersonalNotesPage() {
  return (
    <MainLayoutWrapper>
      <h1>Personal notes</h1>

      <div className={s.buttonContainer}>
        <NewNoteButton />
      </div>

      <NoteList notes={mockNotes} editable />
    </MainLayoutWrapper>
  )
}
