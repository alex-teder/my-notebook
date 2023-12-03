import {mockNotes} from '/src/utils/mockNotes'

const initialState = mockNotes

const NOTES_ACTIONS = {
  createNote: 'CREATE_NOTE',
  updateNote: 'UPDATE_NOTE',
  deleteNote: 'DELETE_NOTE',
}

export const createNoteActionCreator = newNote => ({
  type: NOTES_ACTIONS.createNote,
  payload: newNote,
})
export const updateNoteActionCreator = updatedNote => ({
  type: NOTES_ACTIONS.updateNote,
  payload: updatedNote,
})
export const deleteNoteActionCreator = noteToDelete => ({
  type: NOTES_ACTIONS.deleteNote,
  payload: noteToDelete,
})

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTES_ACTIONS.createNote:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      }
    case NOTES_ACTIONS.updateNote:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.payload.id) return action.payload
          return note
        }),
      }
    case NOTES_ACTIONS.deleteNote:
      return {
        ...state,
        notes: state.notes.filter(({id}) => id !== action.payload.id),
      }
    default:
      return state
  }
}
