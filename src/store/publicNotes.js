import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {apiFetchPublicNotes} from '../services/api'

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

export const fetchPublicNotes = createAsyncThunk('publicNotes/fetchPublicNotes', async token => {
  const {data, error} = await apiFetchPublicNotes(token)
  if (error) {
    throw new Error(error)
  } else if (data) {
    return data
  }
})

const publicNotesSlice = createSlice({
  name: 'publicNotes',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchPublicNotes.pending, state => {
        state.status = STATUS_ENUM.LOADING
      })
      .addCase(fetchPublicNotes.fulfilled, (state, action) => {
        state.status = STATUS_ENUM.SUCCEEDED
        state.notes = action.payload
      })
      .addCase(fetchPublicNotes.rejected, (state, action) => {
        state.status = STATUS_ENUM.FAILED
        state.error = action.error.message
      })
  },
})

export const publicNotesReducer = publicNotesSlice.reducer
