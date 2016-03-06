import React, { createClass } from 'react'

export const ControlPanel = createClass({
  render() {
    console.log('ControlPanel', this.props);
    return (
      <div
        className="ControlPanel"
        style={{
          background: this.props.color
        }}
        >
        <button
          className="button ButtonMyltiply"
          onClick = { this.props.MultiplyMatrix }
        >
          {'Умножить матрицы'}
        </button>

        <div className="ControlRow">
          <div>
            <button 
              className="btn btn-default ButtonClear"
              onClick = {this.props.ClearMatrix}
            >&#8630; Очистить матрицы</button>
          </div>
          <div>
            <button 
              className=" btn btn-default ButtonClear"
              onClick = {this.props.ChangePlace}
              >&#8645; Поменять матрицы местами</button>
          </div>
        </div>
        <div className="ControlRow">
          <div>
            <input
              id="radioMatrixA"
              name="r"
              type="radio"
              checked = {this.props.selectMatrix==='matrixA'}
              onChange={ this.props.ChangeSelectedMatrix }
            />
            <label htmlFor="r1">Матрица А</label>
            <input
              checked = { this.props.selectMatrix==='matrixB' }
              onChange={ this.props.ChangeSelectedMatrix }
              

              id="radioMatrixB"
              name="r"
              type="radio"
            />
            <label htmlFor="r2">Матрица В</label>
          </div>
          <div>
            <button
              className="btn btn-default"
              onClick = { (e) => this.props.AddRowOrCol(0)}
            >
            &#43; Добавить
            </button>
            <button 
              className="btn btn-default"
              onClick = { (e) => this.props.DeleteRowOrCol(0)}
            >
            &#45; Удалить
            </button>
            Строку
          </div>
          <div>
            <button
              className="btn btn-default"
              onClick = {(e) => this.props.AddRowOrCol(1)}
            >
            &#43; Добавить
            </button>
            <button 
              className="btn btn-default"
              onClick = { (e) => this.props.DeleteRowOrCol(1)}
              
            >
            &#45; Удалить
            </button>
            Столбец
          </div>
        </div>
        <div className="ControlRow">
          <span style={{ maxWidth:'200px' }}>
            {'количество столбцов матрицы А не равно количеству строк матрицы В'}
          </span>
        </div>
      </div>
    )
  }
})

export default ControlPanel
