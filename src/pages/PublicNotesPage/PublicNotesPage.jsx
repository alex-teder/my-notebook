import {Link} from 'react-router-dom'
import {useLocale} from '/src/hooks/useLocale'
import {NoteList} from '/src/components/notes/NoteList'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {mockNotes} from '/src/utils/mockNotes'
import s from './PublicNotesPage.module.scss'

export function PublicNotesPage() {
  const {$t} = useLocale()

  return (
    <MainLayoutWrapper>
      <h1>{$t('public_notes')}</h1>

      <div className={s.nav}>
        <Link to="/personal">Personal notes</Link>
        <Link to="/settings">Settings</Link>
      </div>

      <NoteList notes={mockNotes} favable />
    </MainLayoutWrapper>
  )
}
