import React, { Component } from 'react'
import { GameContainer }from './Game'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

export class App extends Component {


  render() {

    return(
      <div className="container">
        <h1 className="site-title">Text Invaders</h1>
        <GameContainer />
      </div>
    )
  }
}

reactMixin(App.prototype, PureRenderMixin)
