import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useLocale} from '/src/hooks/useLocale'
import {MyCheckbox} from '/src/components/ui/MyCheckbox'
import {NoteList} from '/src/components/notes/NoteList'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {mockNotes} from '/src/utils/mockNotes'
import s from './PublicNotesPage.module.scss'

export function PublicNotesPage() {
  const {$t} = useLocale()
  const [favFilter, setFavFilter] = useState(false)

  const favMockNotes = [mockNotes[1], mockNotes[3]]

  return (
    <MainLayoutWrapper>
      <h1>{$t('public_notes')}</h1>

      <div className={s.nav}>
        <Link to="/personal">{$t('personal_notes')}</Link>
        <Link to="/settings">{$t('settings')}</Link>
      </div>

      <MyCheckbox label="Only favorites" value={favFilter} onChange={() => setFavFilter(v => !v)} />

      <NoteList notes={favFilter ? favMockNotes : mockNotes} favable />
    </MainLayoutWrapper>
  )
}
