import randomWords from 'random-words'
import { fromJS, List } from 'immutable'

export default function next(state) {
  return addWordRow(state)
}

function addWordRow(state) {
  const nextState = state.set('board', state.get('board').unshift(generateRow()))
  return checkForLoss(nextState)
}

function generateRow() {
  let newRow = List.of('', '', '', '', '').map((cell) => {
    return Math.random() > 0.4 ? '' : generateWord() })
  const hasInvader = newRow.filter(cell => cell.length === 0).size !== 5
  return  hasInvader ? newRow : generateRow()
}

function generateWord() {
  let newWord = randomWords()
  return newWord.length > 6 || newWord.length < 3 ? generateWord() : newWord
}


function checkForLoss(state) {
  const lost = state.get('board').last().filter((i) => { return i.length > 0 })
  const nextState = state.set('board', state.get('board').pop())
  return lost.size > 0 ? nextState.set('gameover', true) : nextState
}
