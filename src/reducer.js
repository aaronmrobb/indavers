import startGame from './reducers/start-game'
import shootWord from './reducers/shoot-word'
import initialGame from './data/initial-game'

export default function(state = initialGame, action) {
  switch(action.type) {
    case 'START_GAME':
      return startGame(state)
  }
  return state
}
