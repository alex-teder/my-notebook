import {MyDialog} from '/src/components/ui/MyDialog'
import {MyCard} from '/src/components/ui/MyCard'
import {MyButton} from '/src/components/ui/MyButton'
import s from './ConfirmDeleteDialog.module.scss'

export function ConfirmDeleteDialog({note, close}) {
  return (
    <MyDialog>
      <MyCard>
        <h4>Are you sure you want to delete this note?</h4>
        <p className={s.noteTitle}>{note.title}</p>
        <div className={s.actions}>
          <MyButton onClick={close}>Cancel</MyButton>
          <MyButton accent>Confirm</MyButton>
        </div>
      </MyCard>
    </MyDialog>
  )
}