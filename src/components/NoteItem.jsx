import {useState} from 'react'
import {MyCard} from './ui/MyCard'
import {MyButton} from './ui/MyButton'
import {MyChip} from './ui/MyChip'
import s from './NoteItem.module.scss'

export function NoteItem() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <MyCard rounded color="green">
      <NoteItemContent>
        <div className={s.heading}>Lorem ipsum dolor sit amet.</div>
        <div className={isExpanded ? s.text : s.textHidden}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur accusantium
          laboriosam harum odit tempora ex fugiat. Cumque, provident nesciunt quisquam sint velit
          ducimus saepe, assumenda laboriosam aliquam vel quaerat iure animi magnam excepturi eius,
          porro error quia ullam impedit. Molestias error vero ipsum dicta earum exercitationem
          consequatur impedit deleniti perferendis!
        </div>
      </NoteItemContent>
      <NoteItemDetails>
        <div>
          <b>Author: </b>Alex
        </div>
        <div className={s.tags}>
          <b>Tags: </b>
          <MyChip>tag1</MyChip>
          <MyChip>tag2</MyChip>
          <MyChip>tag with a longer name</MyChip>
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
