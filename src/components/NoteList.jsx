import {NoteItem} from './NoteItem'
import s from './NoteList.module.scss'

export function NoteList({data}) {
  // if (!data || !data.length) {
  //   return <p>No data...</p>
  // }

  return (
    <ul className={s.list}>
      <li>
        <NoteItem />
      </li>
      <li>
        <NoteItem />
      </li>
      <li>
        <NoteItem />
      </li>
    </ul>
  )
}
