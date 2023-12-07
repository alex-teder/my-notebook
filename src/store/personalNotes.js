import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

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
    },
  },
})

export const {createNote, updateNote, deleteNote} = personalNotesSlice.actions
export const personalNotesReducer = personalNotesSlice.reducer
