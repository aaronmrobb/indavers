import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'


export class Form extends Component {

  shootWord(e){
    e.preventDefault()
    this.props.shootWord(this.refs.pewpew.value)
    this.refs.pewpew.value = ''
  }
  render() {

    return(
      <form autoComplete="off" className="turret" onSubmit={this.shootWord.bind(this)}>
         <input disabled={this.props.gameover}  id="gun" ref="pewpew" placeholder="Shoot shit"></input>
      </form>
    )
  }
}

reactMixin(Form.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    gameover: state.get('gameover')
  }
}

export const FormContainer = connect(mapStateToProps, actionCreators)(Form)
