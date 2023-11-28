import {useLocale} from '/src/hooks/useLocale'
import {MyChip} from '/src/components/ui/MyChip'
import s from './NoteItemDetails.module.scss'

export function NoteItemDetails({note}) {
  const {$t} = useLocale()

  return (
    <div className={s.details}>
      <div>
        <b>{$t('author')} </b>
        {note.owner}
      </div>

      <div className={s.tags}>
        <b>{$t('tags')} </b>
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
