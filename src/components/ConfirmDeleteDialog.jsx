import {MyDialog} from './ui/MyDialog'
import {MyCard} from './ui/MyCard'
import {MyButton} from './ui/MyButton'
import s from './ConfirmDeleteDialog.module.scss'

export function ConfirmDeleteDialog({note, close}) {
  return (
    <MyDialog>
      <MyCard>
        <h4>Are you sure you want to delete this?</h4>
        <p className={s.noteTitle}>{note.title}</p>
        <div className={s.actions}>
          <MyButton onClick={close}>Cancel</MyButton>
          <MyButton>Confirm</MyButton>
        </div>
      </MyCard>
    </MyDialog>
  )
}
