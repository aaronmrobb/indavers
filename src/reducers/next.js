import randomWords from 'random-words'
import { fromJS } from 'immutable'

export default function next(state) {
  console.log('next')
  return addWordRow(state)
}

function addWordRow(state) {
  return checkForLoss(state)
}

function checkForLoss(state) {
  return state
}
