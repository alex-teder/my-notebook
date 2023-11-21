import {useState} from 'react'
import {MyCard} from './ui/MyCard'
import {MyButton} from './ui/MyButton'
import {MyChip} from './ui/MyChip'
import s from './NoteItem.module.scss'

export function NoteItem({note}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <MyCard rounded color={note.color}>
      <NoteItemContent>
        <div className={s.heading}>{note.title}</div>
        <div className={isExpanded ? s.text : s.textHidden}>{note.text}</div>
      </NoteItemContent>

      <NoteItemDetails>
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
      </NoteItemDetails>

      <NoteItemActions>
        <MyButton flat>Edit</MyButton>
        <MyButton flat>Delete</MyButton>
        <MyButton flat onClick={() => setIsExpanded(v => !v)}>
          <i className="material-icons">arrow_drop_{isExpanded ? 'up' : 'down'}</i>
        </MyButton>
      </NoteItemActions>
    </MyCard>
  )
}

function NoteItemContent({children}) {
  return <div className={s.content}>{children}</div>
}

function NoteItemActions({children}) {
  return <div className={s.actions}>{children}</div>
}

function NoteItemDetails({children}) {
  return <div className={s.details}>{children}</div>
}
