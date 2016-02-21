import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class Row extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div></div>
    )
  }
}

reactMixin(Row.prototype, PureRenderMixin)
