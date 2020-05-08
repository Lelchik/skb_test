import React, { createClass } from "react";

export const ControlPanel = (props) => {
  console.log("ControlPanel", props);
  return (
    <div
      className="ControlPanel"
      style={{
        background: props.color,
      }}
    >
      <button className="button ButtonMyltiply" onClick={props.MultiplyMatrix}>
        {"Умножить матрицы"}
      </button>

      <div className="ControlRow">
        <div>
          <button
            className="btn btn-default ButtonClear"
            onClick={props.ClearMatrix}
          >
            &#8630; Очистить матрицы
          </button>
        </div>
        <div>
          <button
            className=" btn btn-default ButtonClear"
            onClick={props.ChangePlace}
          >
            &#8645; Поменять матрицы местами
          </button>
        </div>
      </div>
      <div className="ControlRow">
        <div>
          <input
            id="radioMatrixA"
            name="r"
            type="radio"
            checked={props.selectMatrix === "matrixA"}
            onChange={props.ChangeSelectedMatrix}
          />
          <label htmlFor="r1">Матрица А</label>
          <input
            checked={props.selectMatrix === "matrixB"}
            onChange={props.ChangeSelectedMatrix}
            id="radioMatrixB"
            name="r"
            type="radio"
          />
          <label htmlFor="r2">Матрица В</label>
        </div>
        <div>
          <button
            className="btn btn-default"
            onClick={(e) => props.AddRowOrCol(0)}
          >
            &#43; Добавить
          </button>
          <button
            className="btn btn-default"
            onClick={(e) => props.DeleteRowOrCol(0)}
          >
            &#45; Удалить
          </button>
          Строку
        </div>
        <div>
          <button
            className="btn btn-default"
            onClick={(e) => props.AddRowOrCol(1)}
          >
            &#43; Добавить
          </button>
          <button
            className="btn btn-default"
            onClick={(e) => props.DeleteRowOrCol(1)}
          >
            &#45; Удалить
          </button>
          Столбец
        </div>
      </div>
      <div className="ControlRow">
        <span
          style={{
            maxWidth: "200px",
            display: "inline-block",
            color: "red",
            fontWeight: "bold",
          }}
        >
          {props.error}
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;
