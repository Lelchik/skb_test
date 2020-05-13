/*eslint-disable */
import React from "react";
import { Input } from "@skbkontur/react-ui";

export const Matrix = (props) => {
  let cells = props.array.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {props.array[rowIndex].map((col, colIndex) => (
        <td key={colIndex}>
          <Input
            width={45}
            align={"center"}
            placeholder={`${props.name}${rowIndex},${colIndex}`}
            type="text"
            value={col == null ? "" : col}
            onValueChange={(value) => {
              props.SetValue({
                name: props.name,
                row: rowIndex,
                col: colIndex,
                value: value,
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
        <table>
          <tbody>{cells}</tbody>
        </table>
      </div>
      <i className="right"></i>
    </div>
  );
};

export default Matrix;
