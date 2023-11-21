import {useState} from 'react'
import {MyDialog} from './ui/MyDialog'
import {MyCard} from './ui/MyCard'
import {MyButton} from './ui/MyButton'
import {MyTextField} from './ui/MyTextField'
import {MyTextArea} from './ui/MyTextArea'
import {MyColorPicker} from './ui/MyColorPicker'
import {MyCheckbox} from './ui/MyCheckbox'
import s from './EditDialog.module.scss'

const EMPTY_NOTE = {
  title: '',
  text: '',
  tags: [],
  owner: '',
  isPublic: false,
}

function Heading({noteId}) {
  return (
    <>
      <h4>{noteId ? 'Edit note' : 'Create note'}</h4>
      {noteId && <p className={s.noteId}>id: {noteId}</p>}
    </>
  )
}

export function EditDialog({note = EMPTY_NOTE, close}) {
  const [title, setTitle] = useState(note.title)
  const [text, setText] = useState(note.text)
  const [tagsStr, setTagsStr] = useState(note.tags.join(', '))
  const [color, setColor] = useState(note.color)
  const [isPublic, setIsPublic] = useState(note.isPublic)

  const handler = fn => event => fn(event.target.value)

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <MyDialog>
      <MyCard>
        <Heading noteId={note.id} />

        <form className={s.form} onSubmit={handleSubmit}>
          <MyTextField label="Title:" value={title} onChange={handler(setTitle)} />

          <MyTextArea label="Text:" value={text} onChange={handler(setText)} />

          <MyTextField
            label="Tags: (comma separated)"
            value={tagsStr}
            onChange={handler(setTagsStr)}
          />

          <div className={s.formSubdiv}>
            <MyColorPicker label="Select color:" value={color} onChange={handler(setColor)} />

            <MyCheckbox
              label="Make public:"
              value={isPublic}
              onChange={() => setIsPublic(v => !v)}
            />
          </div>

          <div className={s.actions}>
            <MyButton onClick={close}>Cancel</MyButton>
            <MyButton type="submit">Confirm</MyButton>
          </div>
        </form>
      </MyCard>
    </MyDialog>
  )
}
