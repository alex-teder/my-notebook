import {useState} from 'react'
import {MyButton} from './ui/MyButton'
import {EditDialog} from './EditDialog'

export function NewNoteButton() {
  const [isEditDialog, setIsEditDialog] = useState(false)

  return (
    <>
      <MyButton accent onClick={() => setIsEditDialog(true)}>
        New note
        <i className="material-icons">add</i>
      </MyButton>

      {isEditDialog && <EditDialog close={() => setIsEditDialog(false)} />}
    </>
  )
}
