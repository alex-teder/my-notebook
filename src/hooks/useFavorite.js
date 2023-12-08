import {useDispatch, useSelector} from 'react-redux'
import {addNoteToFavs, removeNoteFromFavs} from '/src/store/user'

export function useFavorite(id) {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.user.favorites)
  const isFav = favorites.includes(id)

  const toggleFav = () => {
    if (favorites.includes(id)) {
      dispatch(removeNoteFromFavs(id))
    } else {
      dispatch(addNoteToFavs(id))
    }
  }

  return {isFav, toggleFav}
}
