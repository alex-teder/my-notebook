import {MyButton} from '../../ui/MyButton'
import s from './NoteItemActions.module.scss'

export function NoteItemActions({onEdit, onDelete, isExpanded, onExpand}) {
  return (
    <div className={s.actions}>
      <MyButton flat onClick={onEdit}>
        Edit
      </MyButton>
      <MyButton flat onClick={onDelete}>
        Delete
      </MyButton>
      <MyButton flat ariaLabel={isExpanded ? 'collapse' : 'expand'} onClick={onExpand}>
        <i className="material-icons">arrow_drop_{isExpanded ? 'up' : 'down'}</i>
      </MyButton>
    </div>
  )
}
