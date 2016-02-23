import randomWords from 'random-words'
import { fromJS } from 'immutable'

export default function next(state) {
  return addWordRow(state)
}

function addWordRow(state) {
  const nextState = state.set('board', state.get('board').unshift(
    fromJS(new Array(5).fill('').map((cell) => {
      let newInvader = 'new blank word'
      while(newInvader.length > 7) {
        newInvader = randomWords()
      }
      return Math.random() > 0.4 ? '' : newInvader
    }))
  ))
  return checkForLoss(nextState)
}

function checkForLoss(state) {
  const lost = state.get('board').last().filter((i) => {
    return i.length > 0
  })
  return lost.size > 0 ?
  state.set('board', state.get('board').pop()).set('gameover', true) :
  state.set('board', state.get('board').pop())
}
