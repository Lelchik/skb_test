import 'bootstrap/dist/css/bootstrap.css'
import React, { createClass } from 'react'
import ControlPanel from './ControlPanel'
import MatrixPanel from './MatrixPanel'

import { connect } from 'react-redux'
import {
  ClearMatrix,
  SetValue,
  DeleteRowOrCol,
  ChangeSelectedMatrix,
  AddRowOrCol,
  MultiplyMatrix,
  ChangeBackground,
  ChangePlace
} from '../actions'
const App = createClass({
  
  render() {
    console.log(this.props);
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <ControlPanel
          { ...this.props }
    
          
          ></ControlPanel>
        <MatrixPanel {
          ...this.props }
         
        ></MatrixPanel>
      </div>
    )
  }
})
function mapStateToProps(state) {
  return {
    ...state
  }
}

const mapDispatchToProps = {
  ClearMatrix,
  SetValue,
  DeleteRowOrCol,
  ChangeSelectedMatrix,
  AddRowOrCol,
  MultiplyMatrix,
  ChangeBackground,
  ChangePlace
}
export default connect(mapStateToProps, mapDispatchToProps)(App)