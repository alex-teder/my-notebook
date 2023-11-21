import {NoteItem} from './NoteItem'
import s from './NoteList.module.scss'

export function NoteList({notes, editable}) {
  if (!notes || !notes.length) {
    return <p>No data...</p>
  }

  return (
    <ul className={s.list}>
      {notes.map(note => (
        <li key={note.id}>
          <NoteItem note={note} isEditable={editable} />
        </li>
      ))}
    </ul>
  )
}
