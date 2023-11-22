import {MyButton} from '../../ui/MyButton'
import s from './NoteItemActions.module.scss'

export function NoteItemActions({onEdit, onDelete, onFav, isExpanded, onExpand}) {
  return (
    <div className={s.actions}>
      {onEdit && (
        <MyButton flat onClick={onEdit}>
          Edit
        </MyButton>
      )}

      {onDelete && (
        <MyButton flat onClick={onDelete}>
          Delete
        </MyButton>
      )}

      {onFav && (
        <MyButton flat ariaLabel="add to favorites" onClick={onFav}>
          <i className="material-icons">star_outline</i>
        </MyButton>
      )}

      <MyButton flat ariaLabel={isExpanded ? 'collapse' : 'expand'} onClick={onExpand}>
        <i className="material-icons">arrow_drop_{isExpanded ? 'up' : 'down'}</i>
      </MyButton>
    </div>
  )
}
