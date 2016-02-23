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
    } else if (this.props.gameover){
      clearInterval(this.interval)
      this.interval = undefined
    }
  }
  handleStart(e) {
    e.preventDefault()
    this.props.startGame()
    document.getElementById('gun').focus()
  }
  render() {
    const rows = this.props.board.map((row, idx) => {
      return <Row cells={row} key={idx} gameover={this.props.gameover}/>
    })
    return(
      <div className="board-container">
        <div className="board">
          { rows }
        </div>
        <FormContainer gameover={this.props.gameover}/>
        <div id="status-message" style={{display: this.props.gameover || !this.props.playing ? 'block' : 'none'}}>
          <h3>{this.props.gameover ? 'Gameover' : 'New Game'}</h3>
          <h4 style={{display: this.props.gameover ? 'block' : 'none'}}>Score: {this.props.score}</h4>
          <button onClick={this.handleStart.bind(this)}>{this.props.gameover ? 'Replay' : 'Play'}</button>
        </div>
      </div>
    )
  }
}

reactMixin(Game.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    score: state.get('score'),
    gameover: state.get('gameover'),
    board: state.get('board'),
    playing: state.get('playing')
  }
}


export const GameContainer = connect(mapStateToProps, actionCreators)(Game)
