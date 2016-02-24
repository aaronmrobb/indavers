import { List } from 'immutable'

function shootWord(state, word) {
  const coordinates = findWord(state, word.split(' ')[0].toLowerCase())
  return coordinates ? state.setIn(['board', coordinates.get(0), coordinates.get(1)], '')
                            .set('score', state.get('score') + (word.length * 15))
                     : state
}

export default shootWord

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
