import {useState} from 'react'
import {useLocale} from '/src/hooks/useLocale'
import {MyDialog} from '/src/components/ui/MyDialog'
import {MyCard} from '/src/components/ui/MyCard'
import {MyButton} from '/src/components/ui/MyButton'
import {MyTextField} from '/src/components/ui/MyTextField'
import {MyTextArea} from '/src/components/ui/MyTextArea'
import {MyColorPicker} from '/src/components/ui/MyColorPicker'
import {MyCheckbox} from '/src/components/ui/MyCheckbox'
import s from './EditDialog.module.scss'

const EMPTY_NOTE = {
  title: '',
  text: '',
  tags: [],
  color: '#808080',
  owner: '',
  isPublic: false,
}

function Heading({noteId}) {
  const {$t} = useLocale()

  return (
    <>
      <h4>{noteId ? $t('editDialog.edit_note') : $t('editDialog.create_note')}</h4>
      {noteId && <p className={s.noteId}>id: {noteId}</p>}
    </>
  )
}

export function EditDialog({note = EMPTY_NOTE, close}) {
  const {$t} = useLocale()
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
          <MyTextField label={$t('editDialog.title')} value={title} onChange={handler(setTitle)} />

          <MyTextArea label={$t('editDialog.text')} value={text} onChange={handler(setText)} />

          <MyTextField
            label={$t('editDialog.tags')}
            value={tagsStr}
            onChange={handler(setTagsStr)}
          />

          <div className={s.formSubdiv}>
            <MyColorPicker
              label={$t('editDialog.color')}
              value={color}
              onChange={handler(setColor)}
            />
            <MyCheckbox
              label={$t('editDialog.public')}
              value={isPublic}
              onChange={() => setIsPublic(v => !v)}
            />
          </div>

          <div className={s.actions}>
            <MyButton onClick={close}>{$t('editDialog.cancel')}</MyButton>
            <MyButton accent type="submit">
              {$t('editDialog.confirm')}
            </MyButton>
          </div>
        </form>
      </MyCard>
    </MyDialog>
  )
}
