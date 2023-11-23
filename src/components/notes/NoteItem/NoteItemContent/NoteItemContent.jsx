import s from './NoteItemContent.module.scss'

export function NoteItemContent({note, isExpanded}) {
  return (
    <div className={s.content}>
      <div className={s.heading}>{note.title}</div>
      <div className={isExpanded ? s.text : s.textHidden}>{note.text}</div>
    </div>
  )
}
