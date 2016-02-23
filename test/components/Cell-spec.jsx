import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map } from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Cell } from '../../src/components/Cell.jsx'

describe('<Cell />', () => {
  it('renders with class of cell', () => {
    const wrapper = shallow(<Cell content=''/>)
    expect(wrapper).to.have.className('cell')
  })
  it('renders with class of invader when content is not empty', () => {
    const wrapper = shallow(<Cell content='bubba'/>)
    expect(wrapper).to.have.className('invader')
  })
  it('renders with correct text in content', () => {
    const wrapper = shallow(<Cell content='bubba'/>)
    expect(wrapper).to.have.text('bubba')
  })
})
