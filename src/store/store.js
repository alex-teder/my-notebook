import {combineReducers, createStore} from 'redux'
import {personalNotesReducer} from './personalNotes'
import {publicNotesReducer} from './publicNotes'
import {userReducer} from './user'

const rootReducer = combineReducers({
  personalNotes: personalNotesReducer,
  publicNotes: publicNotesReducer,
  user: userReducer,
})

export const store = createStore(rootReducer)
