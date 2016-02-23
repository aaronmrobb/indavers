import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map } from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Row } from '../../src/components/Row.jsx'

describe('<Row />', () => {
  it('has class of row')
  it('has 5 cells')
  it('has correct amount of cells with invaders')
  it('has cells with correct invader text')
  it('fades when game is over')
})
