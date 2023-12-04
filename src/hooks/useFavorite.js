import {useDispatch, useSelector} from 'react-redux'
import {USER_ACTIONS} from '../store/user'

export function useFavorite(id) {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.user.favorites)
  console.log(favorites)
  const isFav = favorites.includes(id)

  const toggleFav = () => {
    if (favorites.includes(id)) {
      dispatch({type: USER_ACTIONS.removeNoteFromFavs, payload: id})
    } else {
      dispatch({type: USER_ACTIONS.addNoteToFavs, payload: id})
    }
  }

  return {isFav, toggleFav}
}
