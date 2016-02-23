import { fromJS } from 'immutable'

const initialGame = fromJS({
  board: new Array(7).fill(' ').map(c => new Array(5).fill('')),
  playing: false,
  gameover: false,
  score: 0
})

export default initialGame
