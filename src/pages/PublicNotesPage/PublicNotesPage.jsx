import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useLocale} from '/src/hooks/useLocale'
import {MyCheckbox} from '/src/components/ui/MyCheckbox'
import {NoteList} from '/src/components/notes/NoteList'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {mockNotes} from '/src/utils/mockNotes'
import {getItem} from '/src/utils/storageUtils'
import s from './PublicNotesPage.module.scss'

export function PublicNotesPage() {
  const {$t} = useLocale()
  const [favFilter, setFavFilter] = useState(false)

  const filteredNotes = mockNotes.filter(
    note => getItem('user').favorites && getItem('user').favorites.includes(note.id)
  )

  return (
    <MainLayoutWrapper>
      <Heading />
      <NavBar />
      <MyCheckbox label={$t('only_fav')} value={favFilter} onChange={() => setFavFilter(v => !v)} />
      <NoteList notes={favFilter ? filteredNotes : mockNotes} favable />
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
      <Link to="/personal">{$t('personal_notes')}</Link>
      <Link to="/settings">{$t('settings')}</Link>
    </div>
  )
}
