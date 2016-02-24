import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map } from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { App } from '../../src/components/App.jsx'

describe('<App />', () => {
  it('has site title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1')).to.be.ok
    expect(wrapper.find('h1')).to.have.text('Text Invaders')
  })
  it('renders <GameContainer /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('GameContainer')).to.be.ok

  })
})
