import { List } from 'immutable'

export default function shootWord(state, word) {
  const coordinates = findWord(state, word)
  return coordinates ? state.setIn(['board', coordinates.get(0), coordinates.get(1)], '') : state
}

function findWord(state, word) {
  let coordinates
  const filteredBoard = state.set('board', state.get('board').map((row, rIndex) => {
    row.map((cell, cIndex) => {
      if (word === cell) {
        coordinates = List.of(rIndex, cIndex)
      }
    })
  }))
  return coordinates
}
