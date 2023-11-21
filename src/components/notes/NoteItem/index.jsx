import {useState} from 'react'
import {MyCard} from '../../ui/MyCard'
import {NoteItemContent} from './NoteItemContent'
import {NoteItemDetails} from './NoteItemDetails'
import {NoteItemActions} from './NoteItemActions'
import {ConfirmDeleteDialog} from '../../ConfirmDeleteDialog'

export function NoteItem({note}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDeleteDialog, setIsDeleteDialog] = useState(false)

  return (
    <>
      <MyCard color={note.color}>
        <NoteItemContent note={note} isExpanded={isExpanded} />
        <NoteItemDetails note={note} />
        <NoteItemActions
          onEdit={() => {}}
          onDelete={() => setIsDeleteDialog(true)}
          isExpanded={isExpanded}
          onExpand={() => setIsExpanded(v => !v)}
        />
      </MyCard>

      {isDeleteDialog && <ConfirmDeleteDialog note={note} close={() => setIsDeleteDialog(false)} />}
    </>
  )
}
