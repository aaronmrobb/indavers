import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import freshGame from '../fixtures/fresh-game.js'
import reducer from '../../src/reducer.js'

describe('START_GAME', () => {
  it('starts game', () => {
    const action = {
      type: 'START_GAME'
    }
    const nextState = reducer(freshGame, action)
    expect(nextState.get('playing')).to.be.true
  })
})
