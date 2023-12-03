import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useLocale} from '/src/hooks/useLocale'
import {getSingleNote} from '/src/services/getSingleNote'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {MyButton} from '/src/components/ui/MyButton'
import {NoteItem} from '/src/components/notes/NoteItem'
import s from './SingleNotePage.module.scss'

export function SingleNotePage() {
  const {$t} = useLocale()
  const {noteId} = useParams()
  const [note, setNote] = useState(null)

  useEffect(() => {
    async function getNote(id) {
      const {data} = await getSingleNote(id)
      setNote(data)
    }

    getNote(noteId)
  }, [noteId])

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
