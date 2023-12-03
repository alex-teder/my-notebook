import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {useLocale} from '/src/hooks/useLocale'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {MyButton} from '/src/components/ui/MyButton'
import {NoteItem} from '/src/components/notes/NoteItem'
import s from './SingleNotePage.module.scss'

export function SingleNotePage() {
  const {$t} = useLocale()
  const {noteId} = useParams()
  const notes = useSelector(state => state.notes)
  const note = notes.find(({id}) => String(id) == noteId)

  return (
    <MainLayoutWrapper>
      <h1 className={s.heading}>
        <MyButton flat ariaLabel="go back" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </MyButton>
        {$t('note')}
      </h1>

      <NoteItem note={note} isExpanded />
    </MainLayoutWrapper>
  )
}
