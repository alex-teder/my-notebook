import {combineReducers, createStore} from 'redux'
import {notesReducer} from './notes'

const rootReducer = combineReducers({
  notes: notesReducer,
})

export const store = createStore(rootReducer)
