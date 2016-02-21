import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import actionCreators from '../action-creators.js'


export class Form extends Component {


  render() {

    return(
      <div></div>
    )
  }
}

reactMixin(Form.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const FormContainer = connect(mapStateToProps, actionCreators)(Form)
