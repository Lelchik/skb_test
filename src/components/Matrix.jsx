/*eslint-disable */
import React, { createClass } from "react";
import { Table } from "react-bootstrap";

export const Matrix = (props) => {
  console.log(props);
  let test = Array.from({ length: props.row }, (v, r) => (
    <tr key={r}>
      {Array.from({ length: props.col }, (v, c) => (
        <td key={c} style={{ border: "none" }}>
          <input
            className="MatrixValue"
            placeholder={`${props.name}${r},${c}`}
            type="text"
            value={props.array[r][c] || ""}
            onChange={(e) => {
              props.SetValue({
                name: props.name,
                row: r,
                col: c,
                value: e.target.value,
              });
            }}
            onFocus={(e) => {
              props.ChangeBackground("#5199db");
            }}
            onBlur={(e) => {
              props.ChangeBackground("#bcbcbc");
            }}
            disabled={props.disabled}
          />
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="matrix">
      <i className="left"></i>
      <div className="MatrixTable">
        <Table style={{ marginBottom: "0px" }}>
          <tbody>{test}</tbody>
        </Table>
      </div>

      <i className="right"></i>
    </div>
  );
};

export default Matrix;
