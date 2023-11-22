import {NoteList} from '../components/notes/NoteList'
import {MainLayoutWrapper} from '../components/layout/MainLayoutWrapper'
import {mockNotes} from '../utils/mockNotes'
import {NewNoteButton} from '../components/NewNoteButton'
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
