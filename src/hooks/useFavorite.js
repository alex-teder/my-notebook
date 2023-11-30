import {useState} from 'react'
import {getItem, patchItem} from '/src/utils/storageUtils'

export function useFavorite(id) {
  const [isFav, setIsFav] = useState(
    !!getItem('user').favorites && getItem('user').favorites.includes(id)
  )

  const toggleFav = () => {
    const favs = getItem('user').favorites || []
    if (favs.includes(id)) {
      setIsFav(false)
      patchItem('user', {favorites: favs.filter(item => item !== id)})
    } else {
      setIsFav(true)
      patchItem('user', {favorites: favs.concat(id)})
    }
  }

  return {isFav, toggleFav}
}
