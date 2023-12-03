import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useLocale} from '/src/hooks/useLocale'
import {NoteList} from '/src/components/notes/NoteList'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {NewNoteButton} from '/src/components/NewNoteButton'
import s from './PersonalNotesPage.module.scss'

export function PersonalNotesPage() {
  const notes = useSelector(state => state.personalNotes)

  return (
    <MainLayoutWrapper>
      <Heading />
      <NavBar />
      <NewNoteButton />
      <NoteList notes={notes} editable />
    </MainLayoutWrapper>
  )
}

function Heading() {
  const {$t} = useLocale()
  return <h1>{$t('personal_notes')}</h1>
}

function NavBar() {
  const {$t} = useLocale()
  return (
    <div className={s.nav}>
      <Link to="/public">{$t('public_notes')}</Link>
      <Link to="/settings">{$t('settings')}</Link>
    </div>
  )
}
