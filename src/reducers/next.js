import randomWords from 'random-words'
import { fromJS } from 'immutable'

export default function next(state) {
  return addWordRow(state)
}

function addWordRow(state) {
  const nextState = state.set('board', state.get('board').unshift(
    fromJS(new Array(5).fill('').map((cell) => {
          return Math.random() > 0.5 ? '' : randomWords()
    }))
  ))
  return checkForLoss(nextState)
}

function checkForLoss(state) {
  const lost = state.get('board').last().filter((i) => {
    return i.length > 0
  })
  return lost.size > 0 ? state.set('board', state.get('board').pop()).set('gameover', true) : state.set('board', state.get('board').pop())
}
