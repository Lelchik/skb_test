import React from "react";
import Matrix from "./Matrix";
import { Colors, Matrix as MatrixType } from "../types";

interface Props {
  matrixC: MatrixType;
  matrixA: MatrixType;
  matrixB: MatrixType;
  onChangeMatrixA: (value: MatrixType) => void;
  onChangeMatrixB: (value: MatrixType) => void;
  onChangeBackground: (value: Colors) => void;
}

export const MatrixPanel = (props: Props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Matrix matrix={props.matrixC} disabled name="c"></Matrix>
            </td>
            <td>
              <Matrix
                matrix={props.matrixA}
                onChange={props.onChangeMatrixA}
                onChangeBackground={props.onChangeBackground}
                name={"a"}
              ></Matrix>
            </td>
            <td style={{ verticalAlign: "middle", fontSize: "x-large" }}>А</td>
          </tr>
          <tr>
            <td style={{ border: "none" }}>
              <Matrix
                matrix={props.matrixB}
                onChange={props.onChangeMatrixB}
                onChangeBackground={props.onChangeBackground}
                name={"b"}
              ></Matrix>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "center", fontSize: "x-large" }}>B</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MatrixPanel;
