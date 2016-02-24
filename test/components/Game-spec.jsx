import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map, fromJS } from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Game } from '../../src/components/Game.jsx'

describe('<Game />', () => {
  it('renders board', () => {
    const board = fromJS(new Array(7).fill('').map((row)=> {return new Array(5).fill('')}))
    const wrapper = shallow(<Game board={board}/>)
    expect(wrapper.find('.board')).to.be.ok
  })
  it('renders 7 rows', () => {
    const board = fromJS(new Array(7).fill('').map((row)=> {return new Array(5).fill('')}))
    const wrapper = shallow(<Game board={board}/>)
    expect(wrapper.find('Row').length).to.equal(7)
  })
  it('renders <Status /> component', () => {
    const board = fromJS(new Array(7).fill('').map((row)=> {return new Array(5).fill('')}))
    const wrapper = shallow(<Game board={board}/>)
    expect(wrapper.find('Status')).to.be.ok
  })
  it('renders <FormContainer /> component', () => {
    const board = fromJS(new Array(7).fill('').map((row)=> {return new Array(5).fill('')}))
    const wrapper = shallow(<Game board={board}/>)
    expect(wrapper.find('FormContainer')).to.be.ok
  })
})
