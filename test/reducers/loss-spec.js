import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import losingGame from '../fixtures/pre-loss-game.js'
import reducer from '../../src/reducer.js'

describe('NEXT triggering loss', () => {
  it('triggers a loss a game when a row with remaining invaders is removed', () => {
    const action = {
      type: 'NEXT'
    }
    const state = losingGame.set('board', losingGame.get('board').setIn([6, 0], 'bubba'))
    const nextState = reducer(state, action)
    expect(nextState.get('gameover')).to.be.true
  })
  it('it does not trigger loss when row with no invaders is removed', () => {
    const action = {
      type: 'NEXT'
    }
    const nextState = reducer(losingGame, action)
    expect(nextState.get('gameover')).to.be.false
  })
})
