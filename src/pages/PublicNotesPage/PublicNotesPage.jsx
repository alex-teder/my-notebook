import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useLocale} from '/src/hooks/useLocale'
import {MyCheckbox} from '/src/components/ui/MyCheckbox'
import {NoteList} from '/src/components/notes/NoteList'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {getItem} from '/src/utils/storageUtils'
import {PATHS} from '/src/services/router'
import s from './PublicNotesPage.module.scss'
import {fetchPublicNotes} from '../../store/publicNotes'

export function PublicNotesPage() {
  const {$t} = useLocale()
  const dispatch = useDispatch()
  const notes = useSelector(state => state.publicNotes.notes)
  const status = useSelector(state => state.publicNotes.status)
  const token = useSelector(state => state.user.token)
  const [favFilter, setFavFilter] = useState(false)
  const filteredNotes = (notes || []).filter(
    note => getItem('user').favorites && getItem('user').favorites.includes(note.id)
  )

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPublicNotes(token))
    }
  }, [dispatch, status, token])

  return (
    <MainLayoutWrapper>
      <Heading />
      <NavBar />
      <MyCheckbox label={$t('only_fav')} value={favFilter} onChange={() => setFavFilter(v => !v)} />
      {status === 'loading' ? (
        <p>Getting data...</p>
      ) : (
        <NoteList notes={favFilter ? filteredNotes : notes} favable />
      )}
    </MainLayoutWrapper>
  )
}

function Heading() {
  const {$t} = useLocale()
  return <h1>{$t('public_notes')}</h1>
}

function NavBar() {
  const {$t} = useLocale()
  return (
    <div className={s.nav}>
      <Link to={PATHS.PERSONAL}>{$t('personal_notes')}</Link>
      <Link to={PATHS.SETTINGS}>{$t('settings')}</Link>
    </div>
  )
}
