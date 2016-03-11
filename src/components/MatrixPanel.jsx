/* eslint-disable */
import React, { createClass } from 'react'
import Matrix from './Matrix'
import { Table } from 'react-bootstrap'
export const MatrixPanel = createClass({
  render() {
  console.log('matrixPanel', this.props)
    return (
      <div>
        <div style={{ display: 'table-row' }}>
          <Table className="MatrixTable">
            <tbody>
              <tr>
                <td>
                  <Matrix
                    { ...this.props.matrixC }
                    SetValue={this.props.SetValue}
                    ChangeBackground={this.props.ChangeBackground}
                    disabled={1}
                    ></Matrix>
                </td>
                <td>
                  <Matrix
                    { ...this.props.matrixA }
                    SetValue={this.props.SetValue}
                    ChangeBackground={this.props.ChangeBackground}
                    disabled={0}
                   ></Matrix>
                  </td>
                  <td style={{verticalAlign:'middle', fontSize:'x-large'}}>
                    А
                  </td>
                </tr>
                <tr>
                  <td style={{border:'none'}}>
                    <Matrix
                      { ...this.props.matrixB }
                        SetValue={this.props.SetValue}
                        ChangeBackground={this.props.ChangeBackground}
                        disabled={0}
                    ></Matrix>
                  </td>
                </tr>
                <tr>
                  <td style={{textAlign: 'center', fontSize:'x-large'}}>
                    B
                  </td>
                </tr>
              </tbody>
            </Table>
        </div>
      </div>
    )
  }
})

export default MatrixPanel