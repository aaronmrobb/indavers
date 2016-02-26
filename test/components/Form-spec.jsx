import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map } from 'immutable'
import sinon from 'sinon'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Form } from '../../src/components/Form.jsx'

describe('<Form />', () => {
  it('renders without props', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper).to.be.ok
    expect(wrapper.find('input')).to.be.ok
    expect(wrapper.find('form')).to.be.ok
  })
  it('renders with correct class and id', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find('.shooter')).to.be.ok
    expect(wrapper.find('#gun')).to.be.ok
  })
  it('input has placeholder text', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find('#gun')).to.have.attr('placeholder', 'Just Shoot It')

  })
  it('is not disabled while game is being played', () => {
    const wrapper = shallow(<Form gameover={false}/>)
    expect(wrapper.find('#gun')).to.not.have.attr('disabled')
  })
  it('is disabled when game is over', () => {
    const wrapper = shallow(<Form gameover={true}/>)
    expect(wrapper.find('#gun')).to.have.attr('disabled')
  })
  it('fires at word on submit', () => {
    const shootWord = sinon.spy();
    const wrapper = mount(<Form shootWord={shootWord}/>)
    wrapper.find('form').simulate('submit');
    expect(shootWord.calledOnce).to.equal(true);

  })
})
