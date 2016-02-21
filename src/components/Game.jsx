import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Row } from './Row'
import { FormContainer } from './Form'
import * as actionCreators from '../action-creators'

export class Game extends Component {
  componentDidUpdate() {
    if(!this.interval && this.props.playing) {
      this.interval = setInterval(this.props.next, 2000)
    }
  }
  render() {
    const rows = this.props.board.map((row, idx) => {
      return <Row cells={row} key={idx}/>
    })
    return(
      <div className="container">
        <div className="board">
          Board
          { rows }
        </div>
        <FormContainer />
        <div id="status-message" style={{display: this.props.gameover || !this.props.playing ? 'block' : 'none'}}>
          <h3>{this.props.gameover ? 'Gameover Sucka' : 'Keyup brochacho'}</h3>
          <button onClick={this.props.startGame}>{this.props.gameover ? 'Replay' : 'Play'}</button>
        </div>
      </div>
    )
  }
}

reactMixin(Game.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    board: state.get('board'),
    playing: state.get('playing')
  }
}


export const GameContainer = connect(mapStateToProps, actionCreators)(Game)
