import randomWords from 'random-words'
import { fromJS } from 'immutable'

function next(state) {
  return addWordRow(state)
}
export default next

function addWordRow(state) {
  const nextState = state.set('board', state.get('board').unshift(
    fromJS(new Array(5).fill('').map((cell) => {
      return Math.random() > 0.4 ? '' : generateWord()
    }))
  ))
  return checkForLoss(nextState)
}

function generateWord() {
  let newWord = 'new blank word'
  while(newWord.length > 6) { newWord = randomWords() }
  return newWord
}


function checkForLoss(state) {
  const lost = state.get('board').last().filter((i) => { return i.length > 0 })
  const nextState = state.set('board', state.get('board').pop())
  return lost.size > 0 ? nextState.set('gameover', true) : nextState
}
