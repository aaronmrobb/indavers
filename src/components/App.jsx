import React, { Component } from 'react'
import { GameContainer }from './Game'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import actionCreators from '../action-creators'

export class App extends Component {


  render() {

    return(
      <div className="container">
        <GameContainer />
      </div>
    )
  }
}

reactMixin(App.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App)
