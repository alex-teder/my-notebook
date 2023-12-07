import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useLocale} from '/src/hooks/useLocale'
import {NoteList} from '/src/components/notes/NoteList'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {NewNoteButton} from '/src/components/NewNoteButton'
import {PATHS} from '/src/services/router'
import {fetchPersonalNotes} from '../../store/personalNotes'
import s from './PersonalNotesPage.module.scss'

export function PersonalNotesPage() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.personalNotes.notes)
  const status = useSelector(state => state.personalNotes.status)
  const token = useSelector(state => state.user.token)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPersonalNotes(token))
    }
  }, [dispatch, status, token])

  return (
    <MainLayoutWrapper>
      <Heading />
      <NavBar />
      <NewNoteButton />
      {status === 'loading' ? <p>Getting data...</p> : <NoteList notes={notes} editable />}
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
      <Link to={PATHS.PUBLIC}>{$t('public_notes')}</Link>
      <Link to={PATHS.SETTINGS}>{$t('settings')}</Link>
    </div>
  )
}
