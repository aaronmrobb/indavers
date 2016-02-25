import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import freshGame from '../fixtures/fresh-game.js'
import reducer from '../../src/reducer.js'

describe('SHOOT_WORD', () => {
  it('removes the word when correctly spelled', () => {
    const action = {
      type: 'SHOOT_WORD',
      word: 'bubba'
    }
    const state = freshGame.set('board', freshGame.get('board').setIn([0, 0], 'bubba'))
    const nextState = reducer(state, action)
    expect(nextState.get('board').getIn([0, 0])).to.equal('')
  })
  it('adds to score when word is removed', () => {
    const action = {
      type: 'SHOOT_WORD',
      word: 'bubba'
    }
    const state = freshGame.set('board', freshGame.get('board').setIn([0, 0], 'bubba'))
    const nextState = reducer(state, action)
    expect(nextState.get('score')).to.equal(75)
  })
  it('does not remove anything when incorrectly spelled', () => {
    const action = {
      type: 'SHOOT_WORD',
      word: 'bubbo'
    }
    const state = freshGame.set('board', freshGame.get('board').setIn([0, 0], 'bubba'))
    const nextState = reducer(state, action)
    expect(nextState.get('board').getIn([0, 0])).to.equal('bubba')
  })
  it('finds the last instance of duplicate words and removes only that one', () => {
    const action = {
      type: 'SHOOT_WORD',
      word: 'bubba'
    }
    const firstWord = freshGame.set('board', freshGame.get('board').setIn([0, 0], 'bubba'))
    const secondWord = firstWord.set('board', firstWord.get('board').setIn([0, 1], 'bubba'))
    const nextState = reducer(secondWord, action)
    expect(nextState.get('board').getIn([0, 0])).to.equal('bubba')
    expect(nextState.get('board').getIn([0, 1])).to.equal('')

  })
  it('does not allow you to shoot words that have other words in column ahead of t')
})
