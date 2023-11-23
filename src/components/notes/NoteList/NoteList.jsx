import {NoteItem} from '../NoteItem'
import s from './NoteList.module.scss'

export function NoteList({notes, editable, favable}) {
  if (!notes || !notes.length) {
    return <p>No data...</p>
  }

  return (
    <ul className={s.list}>
      {notes.map(note => (
        <li key={note.id}>
          <NoteItem note={note} isEditable={editable} isFavable={favable} />
        </li>
      ))}
    </ul>
  )
}
