import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map, List } from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Row } from '../../src/components/Row.jsx'

describe('<Row />', () => {
  it('has class of row', () => {
    const content = List.of('Bub', 'bob', 'bill', 'bingo', '')
    const wrapper = shallow(<Row cells={content}/>)
    expect(wrapper).to.have.className('row')
  })
  it('has 5 cells', () => {
    const content = List.of('Bub', 'bob', 'bill', 'bingo', '')
    const wrapper = shallow(<Row cells={content}/>)
    expect(wrapper.find('Cell').length).to.equal(5)
  })
  it('has correct amount of cells with invaders', () => {
    const content = List.of('Bub', 'bob', 'bill', 'bingo', '')
    const wrapper = mount(<Row cells={content}/>)
    expect(wrapper.find('.invader').length).to.equal(4)
  })
  it('has cells with correct invader text', () => {
    const content = List.of('Bub', 'bob', 'bill', 'bingo', '')
    const wrapper = mount(<Row cells={content}/>)
    expect(wrapper.find('.invader').first()).to.have.text('Bub')
    expect(wrapper.find('.invader').last()).to.have.text('bingo')

  })
  it('fades when game is over', () => {
    const content = List.of('Bub', 'bob', 'bill', 'bingo', '')
    const wrapper = mount(<Row cells={content} gameover={true}/>)
    expect(wrapper).to.have.style('opacity', '0.3')
  })
})
