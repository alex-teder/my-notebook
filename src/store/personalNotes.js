import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {apiDeleteNote, apiFetchPersonalNotes, apiPostNewNote, apiUpdateNote} from '../services/api'
// import {isValidNote} from '/src/services/validation'

const STATUS_ENUM = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
}

const initialState = {
  notes: [],
  status: STATUS_ENUM.IDLE,
  error: null,
}

export const fetchPersonalNotes = createAsyncThunk(
  'personalNotes/fetchPersonalNotes',
  async token => {
    const {data, error} = await apiFetchPersonalNotes(token)
    if (error) {
      throw new Error(error)
    } else if (data) {
      return data
    }
  }
)

export const postNewNote = createAsyncThunk(
  'personalNotes/postNewNote',
  async ({token, newNote}) => {
    const {data, error} = await apiPostNewNote(newNote, token)
    if (error) {
      throw new Error(error)
    } else if (data) {
      return newNote
    }
  }
)

export const updateNote = createAsyncThunk(
  'personalNotes/updateNote',
  async ({token, updatedNote, id}) => {
    const {data, error} = await apiUpdateNote(updatedNote, id, token)
    if (error) {
      throw new Error(error)
    } else if (data) {
      return updatedNote
    }
  }
)

export const deleteNote = createAsyncThunk('personalNotes/deleteNote', async ({token, id}) => {
  const {data, error} = await apiDeleteNote(id, token)
  if (error) {
    throw new Error(error)
  } else if (data) {
    return id
  }
})

const personalNotesSlice = createSlice({
  name: 'personalNotes',
  initialState,
  reducers: {
    updateNote(state, action) {
      const index = state.findIndex(({id}) => id === action.payload.id)
      state[index] = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPersonalNotes.pending, state => {
        state.status = STATUS_ENUM.LOADING
      })
      .addCase(fetchPersonalNotes.fulfilled, (state, action) => {
        state.status = STATUS_ENUM.SUCCEEDED
        state.notes = action.payload
      })
      .addCase(fetchPersonalNotes.rejected, (state, action) => {
        state.status = STATUS_ENUM.FAILED
        state.error = action.error.message
      })
      .addCase(postNewNote.fulfilled, state => {
        state.status = STATUS_ENUM.IDLE
      })
      .addCase(postNewNote.rejected, (_, action) => {
        console.error(action.payload)
      })
      .addCase(updateNote.fulfilled, state => {
        state.status = STATUS_ENUM.IDLE
      })
      .addCase(updateNote.rejected, (_, action) => {
        console.error(action.payload)
      })
      .addCase(deleteNote.fulfilled, state => {
        state.status = STATUS_ENUM.IDLE
      })
      .addCase(deleteNote.rejected, (_, action) => {
        console.error(action.payload)
      })
  },
})

export const personalNotesReducer = personalNotesSlice.reducer
