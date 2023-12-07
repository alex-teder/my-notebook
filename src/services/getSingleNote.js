import {mockNotes} from '/src/utils/mockNotes'

export async function getSingleNote(id) {
  console.log('ID:', id)
  return {data: mockNotes[0]}
}
