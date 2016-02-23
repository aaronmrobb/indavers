import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import classNames from 'classnames'

export class Cell extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return(
      <div className={classNames('cell', { invader: this.props.content.length > 0})}>{this.props.content}</div>
    )
  }
}

reactMixin(Cell.prototype, PureRenderMixin)
