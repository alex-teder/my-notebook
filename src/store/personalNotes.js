import {createSlice} from '@reduxjs/toolkit'
import {mockNotes} from '/src/utils/mockNotes'

const initialState = mockNotes

const personalNotesSlice = createSlice({
  name: 'personalNotes',
  initialState,
  reducers: {
    createNote(state, action) {
      state.push(action.payload)
    },
    updateNote(state, action) {
      const index = state.findIndex(({id}) => id === action.payload.id)
      state[index] = action.payload
    },
    deleteNote(state, action) {
      const index = state.findIndex(({id}) => id === action.payload.id)
      state.splice(index, 1)
    },
  },
})

export const {createNote, updateNote, deleteNote} = personalNotesSlice.actions
export const personalNotesReducer = personalNotesSlice.reducer
