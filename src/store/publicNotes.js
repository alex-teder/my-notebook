import {createSlice} from '@reduxjs/toolkit'
import {mockNotes} from '/src/utils/mockNotes'

const initialState = mockNotes

const publicNotesSlice = createSlice({
  name: 'publicNotes',
  initialState,
})

export const publicNotesReducer = publicNotesSlice.reducer
