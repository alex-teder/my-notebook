import {useLocale} from '/src/hooks/useLocale'
import {NoteList} from '/src/components/notes/NoteList'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {mockNotes} from '/src/utils/mockNotes'

export function PublicNotesPage() {
  const {$t} = useLocale()

  return (
    <MainLayoutWrapper>
      <h1>{$t('public_notes')}</h1>
      <NoteList notes={mockNotes} favable />
    </MainLayoutWrapper>
  )
}
