import React, { createClass } from "react";
import ControlPanel from "./ControlPanel";
import MatrixPanel from "./MatrixPanel";

import { connect } from "react-redux";
import {
  ClearMatrix,
  SetValue,
  DeleteRowOrCol,
  ChangeSelectedMatrix,
  AddRowOrCol,
  MultiplyMatrix,
  ChangeBackground,
  ChangePlace,
} from "../actions";
const App = (props) => {
  console.log(props);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ControlPanel {...props}></ControlPanel>
      <MatrixPanel {...props}></MatrixPanel>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    ...state,
  };
}

const mapDispatchToProps = {
  ClearMatrix,
  SetValue,
  DeleteRowOrCol,
  ChangeSelectedMatrix,
  AddRowOrCol,
  MultiplyMatrix,
  ChangeBackground,
  ChangePlace,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
