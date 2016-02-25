import initialGame from '../data/initial-game'

export default function startGame(state) {
  return initialGame.set('playing', true)
}
