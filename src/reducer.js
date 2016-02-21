import startGame from './reducers/start-game'
import shootWord from './reducers/shoot-word'
import next from './reducers/next'
import initialGame from './data/initial-game'

export default function(state = initialGame, action) {
  switch(action.type) {
    case 'START_GAME':
      return startGame(state)
    case 'SHOOT_WORD':
      return shootWord(state, action.word)
    case 'NEXT':
      return next(state)
  }
  return state
}
