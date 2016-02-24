import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map } from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Status } from '../../src/components/Status'

describe('<Status />', () => {
  it('has the correct class', () => {
    const wrapper = shallow(<Status />)
    expect(wrapper).to.have.className('status-message')
  })
  it('has new game message when state is fresh', () => {
    const wrapper = shallow(<Status gameover={false} playing={false} />)
    expect(wrapper.find('h3')).to.have.text('New Game')
  })
  it('game button has correct text for new game', () => {
    const wrapper = shallow(<Status gameover={false} playing={false} />)
    expect(wrapper.find('button')).to.have.text('Play')
  })
  it('has gameover message when game is over', () => {
    const wrapper = shallow(<Status gameover={true} playing={false} />)
    expect(wrapper.find('h3')).to.have.text('Gameover')
  })
  it('game button has correct text for game over', () => {
    const wrapper = shallow(<Status gameover={true} playing={false} />)
    expect(wrapper.find('button')).to.have.text('Replay')
  })
  it('score displays when game is over', () => {
    const wrapper = shallow(<Status gameover={true} playing={false} score={1000}/>)
    expect(wrapper.find('.score')).to.have.style('display', 'block')
  })
  it('correct score is displayed', () => {
    const wrapper = shallow(<Status gameover={true} playing={false} score={1000}/>)
    expect(wrapper.find('.score')).to.have.text('Score: 1000')
  })
  it('')
})
