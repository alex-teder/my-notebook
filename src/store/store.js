import {combineReducers, createStore} from 'redux'
import {personalNotesReducer} from './personalNotes'
import {publicNotesReducer} from './publicNotes'

const rootReducer = combineReducers({
  personalNotes: personalNotesReducer,
  publicNotes: publicNotesReducer,
})

export const store = createStore(rootReducer)
