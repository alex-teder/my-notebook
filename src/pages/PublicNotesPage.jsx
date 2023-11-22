import {NoteList} from '../components/notes/NoteList'
import {MainLayoutWrapper} from '../components/layout/MainLayoutWrapper'
import {mockNotes} from '../utils/mockNotes'
import s from './PublicNotesPage.module.scss'

export function PublicNotesPage() {
  return (
    <MainLayoutWrapper>
      <div className={s.container}>
        <h1>Public notes</h1>
        <NoteList notes={mockNotes} />
      </div>
    </MainLayoutWrapper>
  )
}
