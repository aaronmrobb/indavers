import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Row } from './Row'
import { Status } from './Status'
import { Form } from './Form'
import * as actionCreators from '../action-creators'

export class Game extends Component {
  componentDidUpdate() {
    if(!this.interval && this.props.playing) {
      this.interval = setInterval(this.props.next, 2000)
    } else if (this.props.gameover){
      clearInterval(this.interval)
      this.interval = undefined
    }
    document.getElementById('gun').focus()
  }
  handleStart(e) {
    e.preventDefault()
    this.props.startGame()
  }
  shootWord(word){
    this.props.shootWord(word)
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
        <Form gameover={this.props.gameover} shootWord={this.shootWord.bind(this)}/>
        <Status gameover={this.props.gameover} score={this.props.score}
          playing={this.props.playing} handleStart={this.handleStart.bind(this)}/>
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
