import initialGame from '../data/initial-game'

function startGame(state) {
  return initialGame.set('playing', true)
}

export default startGame
