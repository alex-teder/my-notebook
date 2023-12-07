import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {MyCard} from '/src/components/ui/MyCard'
import {NoteItemContent} from './NoteItemContent'
import {NoteItemDetails} from './NoteItemDetails'
import {NoteItemActions} from './NoteItemActions'
import {ConfirmDeleteDialog} from '/src/components/ConfirmDeleteDialog'
import {EditDialog} from '/src/components/EditDialog'
import {useFavorite} from '/src/hooks/useFavorite'
import {deleteNote, updateNote} from '/src/store/personalNotes'
import {PATHS} from '/src/services/router'

export function NoteItem({note, isEditable, isFavable, isExpanded = false}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector(state => state.user.token)
  const {isFav, toggleFav} = useFavorite(note.id)
  const [isDeleteDialog, setIsDeleteDialog] = useState(false)
  const [isEditDialog, setIsEditDialog] = useState(false)

  const handleShowMore = () => navigate(`${PATHS.NOTE}/${note.id}`)

  const handleDelete = () => {
    dispatch(deleteNote({token, id: note.id}))
    setIsDeleteDialog(false)
  }
  const handleEdit = updatedNote => {
    dispatch(updateNote({token, updatedNote, id: note.id}))
    setIsEditDialog(false)
  }

  return (
    <>
      <MyCard color={note.color}>
        <NoteItemContent note={note} isExpanded={isExpanded} />
        <NoteItemDetails note={note} />
        <NoteItemActions
          onEdit={isEditable ? () => setIsEditDialog(true) : null}
          onDelete={isEditable ? () => setIsDeleteDialog(true) : null}
          isFav={isFav}
          onFav={isFavable ? toggleFav : null}
          onMore={isExpanded ? null : handleShowMore}
        />
      </MyCard>

      {isEditDialog && (
        <EditDialog note={note} close={() => setIsEditDialog(false)} confirm={handleEdit} />
      )}

      {isDeleteDialog && (
        <ConfirmDeleteDialog
          note={note}
          close={() => setIsDeleteDialog(false)}
          confirm={handleDelete}
        />
      )}
    </>
  )
}
