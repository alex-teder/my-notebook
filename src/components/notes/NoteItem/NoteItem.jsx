import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {MyCard} from '/src/components/ui/MyCard'
import {NoteItemContent} from './NoteItemContent/NoteItemContent'
import {NoteItemDetails} from './NoteItemDetails/NoteItemDetails'
import {NoteItemActions} from './NoteItemActions/NoteItemActions'
import {ConfirmDeleteDialog} from '/src/components/ConfirmDeleteDialog'
import {EditDialog} from '/src/components/EditDialog'
import {getItem, patchItem} from '/src/utils/storageUtils'

export function NoteItem({note, isEditable, isFavable, isExpanded = false}) {
  const navigate = useNavigate()
  const [isDeleteDialog, setIsDeleteDialog] = useState(false)
  const [isEditDialog, setIsEditDialog] = useState(false)
  const [isFav, setIsFav] = useState(
    !!getItem('user').favorites && getItem('user').favorites.includes(note.id)
  )

  const handleFavClick = () => {
    const favs = getItem('user').favorites || []
    if (favs.includes(note.id)) {
      setIsFav(false)
      patchItem('user', {favorites: favs.filter(item => item !== note.id)})
    } else {
      setIsFav(true)
      patchItem('user', {favorites: favs.concat(note.id)})
    }
  }

  const handleShowMore = () => navigate(`/note/${note.id}`)

  return (
    <>
      <MyCard color={note.color}>
        <NoteItemContent note={note} isExpanded={isExpanded} />
        <NoteItemDetails note={note} />
        <NoteItemActions
          onEdit={isEditable ? () => setIsEditDialog(true) : null}
          onDelete={isEditable ? () => setIsDeleteDialog(true) : null}
          isFav={isFav}
          onFav={isFavable ? handleFavClick : null}
          onMore={isExpanded ? null : handleShowMore}
        />
      </MyCard>

      {isEditDialog && <EditDialog note={note} close={() => setIsEditDialog(false)} />}
      {isDeleteDialog && <ConfirmDeleteDialog note={note} close={() => setIsDeleteDialog(false)} />}
    </>
  )
}
