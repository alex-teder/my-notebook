import {useState} from 'react'
import {MyCard} from '../../ui/MyCard'
import {NoteItemContent} from './NoteItemContent'
import {NoteItemDetails} from './NoteItemDetails'
import {NoteItemActions} from './NoteItemActions'
import {ConfirmDeleteDialog} from '../../ConfirmDeleteDialog'
import {EditDialog} from '../../EditDialog'

export function NoteItem({note, isEditable, isFavable}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDeleteDialog, setIsDeleteDialog] = useState(false)
  const [isEditDialog, setIsEditDialog] = useState(false)

  const handleFavClick = () => {}

  return (
    <>
      <MyCard color={note.color}>
        <NoteItemContent note={note} isExpanded={isExpanded} />
        <NoteItemDetails note={note} />
        <NoteItemActions
          onEdit={isEditable ? () => setIsEditDialog(true) : null}
          onDelete={isEditable ? () => setIsDeleteDialog(true) : null}
          onFav={isFavable ? handleFavClick : null}
          isExpanded={isExpanded}
          onExpand={() => setIsExpanded(v => !v)}
        />
      </MyCard>

      {isEditDialog && <EditDialog note={note} close={() => setIsEditDialog(false)} />}
      {isDeleteDialog && <ConfirmDeleteDialog note={note} close={() => setIsDeleteDialog(false)} />}
    </>
  )
}
