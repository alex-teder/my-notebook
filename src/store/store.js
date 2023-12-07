import {combineReducers, createStore} from 'redux'
import {personalNotesReducer} from './personalNotes'
import {publicNotesReducer} from './publicNotes'
import {userReducer} from './user'
import {deleteItem, saveItem} from '/src/utils/storageUtils'

const rootReducer = combineReducers({
  personalNotes: personalNotesReducer,
  publicNotes: publicNotesReducer,
  user: userReducer,
})

export const store = createStore(rootReducer)

const updateLocalStorage = () => {
  const user = store.getState().user
  if (user) {
    saveItem('user', user)
  } else {
    deleteItem('user')
  }
}

store.subscribe(updateLocalStorage)
