import {mockNotes} from '/src/utils/mockNotes'

const initialState = mockNotes

export const publicNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
