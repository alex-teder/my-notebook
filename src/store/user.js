import {createSlice} from '@reduxjs/toolkit'
import {getItem} from '/src/utils/storageUtils'

const initialState = getItem('user') || {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNewUser(state, action) {
      const {token, username} = action.payload
      state.token = token
      state.username = username
      state.favorites = []
    },
    addNoteToFavs(state, action) {
      state.favorites.push(action.payload)
    },
    removeNoteFromFavs(state, action) {
      const index = state.favorites.findIndex(id => id === action.payload)
      state.favorites.splice(index, 1)
    },
    removeUser(state) {
      state.token = null
      state.username = null
      state.favorites = null
    },
  },
})

export const {setNewUser, addNoteToFavs, removeNoteFromFavs, removeUser} = userSlice.actions
export const userReducer = userSlice.reducer
