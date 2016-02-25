import { expect } from 'chai'
import { List, Map, fromJS, is } from 'immutable'
import freshGame from '../fixtures/fresh-game.js'
import finishedGame from '../fixtures/finished-game.js'

import reducer from '../../src/reducer.js'

describe('START_GAME', () => {
  it('starts game', () => {
    const action = {
      type: 'START_GAME'
    }
    const nextState = reducer(freshGame, action)
    expect(nextState.get('playing')).to.be.true
  })
  it('restarts game', () => {
    const action = {
      type: 'START_GAME'
    }
    const nextState = reducer(finishedGame, action)
    expect(nextState.get('playing')).to.be.true
  })
  it('restarted game is not gameover', () => {
    const action = {
      type: 'START_GAME'
    }
    const nextState = reducer(finishedGame, action)
    expect(nextState.get('gameover')).to.be.false
  })
  it('restarted game clears score', () => {
    const action = {
      type: 'START_GAME'
    }
    const nextState = reducer(finishedGame, action)
    expect(nextState.get('score')).to.equal(0)
  })
  it('restarted game has no invaders', () => {
    const action = {
      type: 'START_GAME'
    }
    const nextState = reducer(finishedGame, action)
    expect(is(nextState.get('board'), fromJS(new Array(7).fill(' ').map(c => new Array(5).fill(''))))).to.be.true
  })
})
