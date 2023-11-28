import {useLocale} from '/src/hooks/useLocale'
import {MyButton} from '/src/components/ui/MyButton'
import s from './NoteItemActions.module.scss'

export function NoteItemActions({onEdit, onDelete, onFav, onMore}) {
  const {$t} = useLocale()

  return (
    <div className={s.actions}>
      {onEdit && (
        <MyButton flat onClick={onEdit}>
          {$t('edit')}
        </MyButton>
      )}

      {onDelete && (
        <MyButton flat onClick={onDelete}>
          {$t('delete')}
        </MyButton>
      )}

      {onFav && (
        <MyButton flat ariaLabel="add to favorites" onClick={onFav}>
          <i className="material-icons">star_outline</i>
        </MyButton>
      )}

      {onMore && (
        <MyButton flat onClick={onMore}>
          {$t('show_more')}
          <i className="material-icons" style={{fontSize: '1rem'}}>
            open_in_new
          </i>
        </MyButton>
      )}
    </div>
  )
}
