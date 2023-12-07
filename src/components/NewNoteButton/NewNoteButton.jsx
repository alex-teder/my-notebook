import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocale} from '/src/hooks/useLocale'
import {MyButton} from '/src/components/ui/MyButton'
import {EditDialog} from '/src/components/EditDialog'
import {postNewNote} from '/src/store/personalNotes'
import s from './NewNoteButton.module.scss'

export function NewNoteButton() {
  const dispatch = useDispatch()
  const {$t} = useLocale()
  const [isEditDialog, setIsEditDialog] = useState(false)
  const token = useSelector(state => state.user.token)

  const handleCreate = newNote => {
    dispatch(postNewNote({token, newNote}))
    setIsEditDialog(false)
  }

  return (
    <div className={s.container}>
      <MyButton accent onClick={() => setIsEditDialog(true)}>
        {$t('new_note')}
        <i className="material-icons">add</i>
      </MyButton>

      {isEditDialog && <EditDialog close={() => setIsEditDialog(false)} confirm={handleCreate} />}
    </div>
  )
}
