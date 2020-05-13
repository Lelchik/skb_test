import React from "react";
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
  return (
    <>
      <ControlPanel {...props} />
      <MatrixPanel {...props} />
    </>
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
