import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import freshGame from '../fixtures/fresh-game.js'
import reducer from '../../src/reducer.js'

describe('SHOOT_WORD', () => {
  it('removes the word when correctly spelled')
  it('does not remove anything when incorrectly spelled')
  it('finds the last instance of duplicate words and removes only that one')
  it('does not allow you to shoot words that have other words infront of them')
})
