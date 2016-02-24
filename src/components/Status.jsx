import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class Status extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="status-message" style={{display: this.props.gameover || !this.props.playing ? 'block' : 'none'}}>
        <h3>{this.props.gameover ? 'Gameover' : 'New Game'}</h3>
        <h4 className="score" style={{display: this.props.gameover ? 'block' : 'none'}}>Score: {this.props.score}</h4>
        <button onClick={this.props.handleStart}>{this.props.gameover ? 'Replay' : 'Play'}</button>
      </div>
    )
  }
}

reactMixin(Status.prototype, PureRenderMixin)
