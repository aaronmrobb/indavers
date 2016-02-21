import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'


export class Form extends Component {

  shootWord(e){
    e.preventDefault()
    const pewpew = this.refs.pewpew.value
    console.log(pewpew)
    this.refs.pewpew.value = ''
  }
  render() {

    return(
      <div>
        <form autoComplete="off" className="turret" onSubmit={this.shootWord.bind(this)}>
           <input id="gun" ref="pewpew" placeholder="Shoot shit"></input>
         </form>
      </div>
    )
  }
}

reactMixin(Form.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const FormContainer = connect(mapStateToProps, actionCreators)(Form)
