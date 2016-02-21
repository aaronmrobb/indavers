import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Row from './Row.jsx'

export class Game extends Component {


  render() {

    return(
      <div>

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
