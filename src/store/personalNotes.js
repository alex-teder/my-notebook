import {mockNotes} from '/src/utils/mockNotes'

const initialState = mockNotes

const ACTIONS = {
  createNote: 'CREATE_NOTE',
  updateNote: 'UPDATE_NOTE',
  deleteNote: 'DELETE_NOTE',
}

export const createNoteActionCreator = newNote => ({
  type: ACTIONS.createNote,
  payload: newNote,
})
export const updateNoteActionCreator = updatedNote => ({
  type: ACTIONS.updateNote,
  payload: updatedNote,
})
export const deleteNoteActionCreator = noteToDelete => ({
  type: ACTIONS.deleteNote,
  payload: noteToDelete,
})

export const personalNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.createNote:
      return [...state, action.payload]

    case ACTIONS.updateNote:
      return state.map(note => {
        if (note.id === action.payload.id) return action.payload
        return note
      })

    case ACTIONS.deleteNote:
      return state.filter(({id}) => id !== action.payload.id)

    default:
      return state
  }
}
