import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Cell } from './Cell'

export class Row extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const cells = this.props.cells.map((cell, idx) => {
      return <Cell content={cell} key={idx} />
    })
    return(
      <div className="row"  style={{opacity: this.props.gameover ? 0.3 : 1}}>
        {cells}
      </div>
    )
  }
}

reactMixin(Row.prototype, PureRenderMixin)
