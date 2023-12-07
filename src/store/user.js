import {getItem} from '/src/utils/storageUtils'

export const USER_ACTIONS = {
  setNewUser: 'SET_NEW_USER',
  addNoteToFavs: 'ADD_NOTE_TO_FAVS',
  removeNoteFromFavs: 'REMOVE_NOTE_FROM_FAVS',
  removeUser: 'REMOVE_USER',
}

const initialState = getItem('user') || null

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.setNewUser:
      return {token: action.payload.token, username: action.payload.username, favorites: []}

    case USER_ACTIONS.addNoteToFavs:
      return {...state, favorites: [...state.favorites, action.payload]}

    case USER_ACTIONS.removeNoteFromFavs:
      return {...state, favorites: state.favorites.filter(id => id !== action.payload)}

    case USER_ACTIONS.removeUser:
      return null

    default:
      return state
  }
}
