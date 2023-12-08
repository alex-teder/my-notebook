import {configureStore} from '@reduxjs/toolkit'
import {personalNotesReducer} from './personalNotes'
import {publicNotesReducer} from './publicNotes'
import {userReducer} from './user'
import {deleteItem, saveItem} from '/src/utils/storageUtils'

export const store = configureStore({
  reducer: {
    publicNotes: publicNotesReducer,
    personalNotes: personalNotesReducer,
    user: userReducer,
  },
})

const updateLocalStorage = () => {
  const user = store.getState().user
  if (user.username) {
    saveItem('user', user)
  } else {
    deleteItem('user')
  }
}

store.subscribe(updateLocalStorage)
