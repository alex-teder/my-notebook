import {mockNotes} from '/src/utils/mockNotes'

const initialState = mockNotes

const PERSONAL_NOTES_ACTIONS = {
  createNote: 'CREATE_NOTE',
  updateNote: 'UPDATE_NOTE',
  deleteNote: 'DELETE_NOTE',
}

export const createNoteActionCreator = newNote => ({
  type: PERSONAL_NOTES_ACTIONS.createNote,
  payload: newNote,
})
export const updateNoteActionCreator = updatedNote => ({
  type: PERSONAL_NOTES_ACTIONS.updateNote,
  payload: updatedNote,
})
export const deleteNoteActionCreator = noteToDelete => ({
  type: PERSONAL_NOTES_ACTIONS.deleteNote,
  payload: noteToDelete,
})

export const personalNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSONAL_NOTES_ACTIONS.createNote:
      return [...state, action.payload]

    case PERSONAL_NOTES_ACTIONS.updateNote:
      return state.map(note => {
        if (note.id === action.payload.id) return action.payload
        return note
      })

    case PERSONAL_NOTES_ACTIONS.deleteNote:
      return state.filter(({id}) => id !== action.payload.id)

    default:
      return state
  }
}
