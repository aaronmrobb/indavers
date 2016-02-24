import { fromJS } from 'immutable'

const initialGame = fromJS({
  board: new Array(7).fill(' ').map(c => new Array(5).fill('')),
  playing: false,
  gameover: true,
  score: 1000
})

export default initialGame
