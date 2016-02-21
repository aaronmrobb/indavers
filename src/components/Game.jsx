import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Row } from './Row'
import { FormContainer } from './Form'
export class Game extends Component {


  render() {
    const rows = <Row />
    return(
      <div className="container">
        Game
        <div className="board">
          Board
          { rows }
        </div>
        <FormContainer />
      </div>
    )
  }
}

reactMixin(Game.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const GameContainer = connect(mapStateToProps)(Game)
