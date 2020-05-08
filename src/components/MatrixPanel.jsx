/* eslint-disable */
import React, { createClass } from "react";
import Matrix from "./Matrix";
import { Table } from "react-bootstrap";
export const MatrixPanel = (props) => {
  console.log("matrixPanel", props);
  return (
    <div>
      <div style={{ display: "table-row" }}>
        <Table className="MatrixTable">
          <tbody>
            <tr>
              <td>
                <Matrix
                  {...props.matrixC}
                  SetValue={props.SetValue}
                  ChangeBackground={props.ChangeBackground}
                  disabled={1}
                ></Matrix>
              </td>
              <td>
                <Matrix
                  {...props.matrixA}
                  SetValue={props.SetValue}
                  ChangeBackground={props.ChangeBackground}
                  disabled={0}
                ></Matrix>
              </td>
              <td style={{ verticalAlign: "middle", fontSize: "x-large" }}>
                А
              </td>
            </tr>
            <tr>
              <td style={{ border: "none" }}>
                <Matrix
                  {...props.matrixB}
                  SetValue={props.SetValue}
                  ChangeBackground={props.ChangeBackground}
                  disabled={0}
                ></Matrix>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center", fontSize: "x-large" }}>B</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MatrixPanel;
