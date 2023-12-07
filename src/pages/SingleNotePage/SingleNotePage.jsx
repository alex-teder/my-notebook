import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {useLocale} from '/src/hooks/useLocale'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {MyButton} from '/src/components/ui/MyButton'
import {NoteItem} from '/src/components/notes/NoteItem'
import {apiGetSingleNote} from '/src/services/api'
import s from './SingleNotePage.module.scss'

export function SingleNotePage() {
  const {$t} = useLocale()
  const {noteId} = useParams()
  const [note, setNote] = useState(null)
  const token = useSelector(state => state.user.token)

  useEffect(() => {
    async function getNote(id) {
      const {data, error} = await apiGetSingleNote(id, token)
      if (error) {
        console.error(error)
      } else if (data) {
        setNote(data)
      }
    }

    getNote(noteId)
  }, [noteId, token])

  return (
    <MainLayoutWrapper>
      <h1 className={s.heading}>
        <MyButton flat ariaLabel="go back" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </MyButton>
        {$t('note')}
      </h1>

      {note && <NoteItem note={note} isExpanded />}
    </MainLayoutWrapper>
  )
}
