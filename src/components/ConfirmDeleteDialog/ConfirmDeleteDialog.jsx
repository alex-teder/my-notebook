import {useLocale} from '/src/hooks/useLocale'
import {MyDialog} from '/src/components/ui/MyDialog'
import {MyCard} from '/src/components/ui/MyCard'
import {MyButton} from '/src/components/ui/MyButton'
import s from './ConfirmDeleteDialog.module.scss'

export function ConfirmDeleteDialog({note, close, confirm}) {
  const {$t} = useLocale()

  return (
    <MyDialog>
      <MyCard>
        <h4 className={s.heading}>{$t('deleteDialog.are_you_sure')}</h4>
        <p className={s.noteTitle}>{note.title}</p>
        <div className={s.actions}>
          <MyButton onClick={close}>{$t('deleteDialog.cancel')}</MyButton>
          <MyButton onClick={confirm} accent>
            {$t('deleteDialog.confirm')}
          </MyButton>
        </div>
      </MyCard>
    </MyDialog>
  )
}
