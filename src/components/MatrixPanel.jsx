/* eslint-disable */
import React, { createClass } from 'react'
import Matrix from './Matrix'

export const MatrixPanel = createClass({
  render() {
  console.log('matrixPanel', this.props)
    return (
      <div>
        <div style={{ display: 'table-row' }}>
          <Matrix
            { ...this.props.matrixC }
            SetValue={this.props.SetValue}
            ChangeBackground={this.props.ChangeBackground}
            
            ></Matrix>
          <Matrix
            { ...this.props.matrixA }
            SetValue={this.props.SetValue}
            ChangeBackground={this.props.ChangeBackground}

           ></Matrix>
          А
        </div>
        <Matrix
          { ...this.props.matrixB }
            SetValue={this.props.SetValue}
            ChangeBackground={this.props.ChangeBackground}
            
        ></Matrix>
      </div>
    )
  }
})

export default MatrixPanel