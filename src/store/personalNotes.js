import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
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
    const URL = 'https://dull-pear-haddock-belt.cyclic.app/notes?type=personal'
    const response = await fetch(URL, {
      method: 'GET',
      headers: {Authorization: `Bearer: ${token}`},
    })
    const data = await response.json()
    return data
  }
)

export const postNewNote = createAsyncThunk(
  'personalNotes/postNewNote',
  async ({token, newNote}) => {
    const URL = 'https://dull-pear-haddock-belt.cyclic.app/notes'
    const response = await fetch(URL, {
      method: 'POST',

      headers: {Authorization: `Bearer: ${token}`, 'Content-Type': 'application/json'},
      body: JSON.stringify(newNote),
    })
    if (response.ok) {
      return newNote
    }
    const error = await response.text()
    throw new Error(error)
  }
)

const personalNotesSlice = createSlice({
  name: 'personalNotes',
  initialState,
  reducers: {
    updateNote(state, action) {
      const index = state.findIndex(({id}) => id === action.payload.id)
      state[index] = action.payload
    },
    deleteNote(state, action) {
      const index = state.findIndex(({id}) => id === action.payload.id)
      state.splice(index, 1)
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
      .addCase(postNewNote.fulfilled, (state, action) => {
        state.notes.push(action.payload)
      })
      .addCase(postNewNote.rejected, (state, action) => {
        state.error = action.payload
      })
  },
})

export const {updateNote, deleteNote} = personalNotesSlice.actions
export const personalNotesReducer = personalNotesSlice.reducer
