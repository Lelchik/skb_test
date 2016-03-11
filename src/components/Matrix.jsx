/*eslint-disable */
import React, { createClass } from 'react'
import { Table } from 'react-bootstrap'

export const Matrix = createClass({
  render() {
    console.log(this.props)
    let test = Array.from({ length: this.props.row },
    (v, r) => <tr key={r}>
    {
      Array.from({ length: this.props.col },
        (v, c) =>  (
          <td key={c} style={{border:'none'}}>
            <input
              className="MatrixValue"
              placeholder={`${this.props.name}${r},${c}`}
              type="text"
              value={ this.props.array[r][c] || ''}
              onChange={
                (e) => { this.props.SetValue({name:this.props.name, row:r,col:c,value:e.target.value}) } }
              onFocus ={ (e) => {this.props.ChangeBackground('#5199db')} }
              onBlur = { (e) => {this.props.ChangeBackground('#bcbcbc')}}
              disabled= {this.props.disabled}
            />
          </td>
          )
      )
    }

    </tr>)
 
    return (
      <div className="matrix">
        <i className="left"></i>
        <div className="MatrixTable">
          <Table style={{ marginBottom: '0px' }}>
            <tbody>
              { test }
            </tbody>
          </Table>

        </div>
       
        <i className='right'></i>

      </div>
    )
  }
})

export default Matrix
