import { List } from 'immutable'

export default function shootWord(state, word) {
  const coordinates = findWord(state, word.split(' ')[0].toLowerCase())
  const clearPath = coordinates ? checkShotPath(state, coordinates, word) : false
  const nextState = clearPath ? state.setIn(['board', coordinates.get(0), coordinates.get(1)], '')
      .set('score', state.get('score') + (word.length * 15)) : state
  return nextState
}

function findWord(state, word) {
  let coordinates
  const filteredBoard = state.set('board', state.get('board').map((row, rIndex) => {
    row.map((cell, cIndex) => {if (word === cell) coordinates = List.of(rIndex, cIndex)})
  }))
  return coordinates
}

function checkShotPath(state, coordinates, word) {
  let firstHit
  state.get('board').map((row) => { row.map((cell, idx) => {
    if (idx === coordinates.get(1) && cell.length > 0) { firstHit = cell }
  })})
  return firstHit === word
}
