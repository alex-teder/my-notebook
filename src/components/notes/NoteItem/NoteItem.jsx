import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {MyCard} from '/src/components/ui/MyCard'
import {NoteItemContent} from './NoteItemContent/NoteItemContent'
import {NoteItemDetails} from './NoteItemDetails/NoteItemDetails'
import {NoteItemActions} from './NoteItemActions/NoteItemActions'
import {ConfirmDeleteDialog} from '/src/components/ConfirmDeleteDialog'
import {EditDialog} from '/src/components/EditDialog'

export function NoteItem({note, isEditable, isFavable, isExpanded = false}) {
  const navigate = useNavigate()
  const [isDeleteDialog, setIsDeleteDialog] = useState(false)
  const [isEditDialog, setIsEditDialog] = useState(false)

  const handleFavClick = () => {}
  const handleShowMore = () => navigate(`/note/${note.id}`)

  return (
    <>
      <MyCard color={note.color}>
        <NoteItemContent note={note} isExpanded={isExpanded} />
        <NoteItemDetails note={note} />
        <NoteItemActions
          onEdit={isEditable ? () => setIsEditDialog(true) : null}
          onDelete={isEditable ? () => setIsDeleteDialog(true) : null}
          onFav={isFavable ? handleFavClick : null}
          onMore={isExpanded ? null : handleShowMore}
        />
      </MyCard>

      {isEditDialog && <EditDialog note={note} close={() => setIsEditDialog(false)} />}
      {isDeleteDialog && <ConfirmDeleteDialog note={note} close={() => setIsDeleteDialog(false)} />}
    </>
  )
}
