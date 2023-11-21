import {MyChip} from '../../ui/MyChip'
import s from './NoteItemDetails.module.scss'

export function NoteItemDetails({note}) {
  return (
    <div className={s.details}>
      <div>
        <b>Author: </b>
        {note.owner}
      </div>

      <div className={s.tags}>
        <b>Tags: </b>
        {note.tags.map((tag, idx) => (
          <MyChip key={`${tag}${idx}`}>{tag}</MyChip>
        ))}
      </div>

      {note.isPublic && (
        <i className="material-icons" aria-label="public note">
          group
        </i>
      )}
    </div>
  )
}
