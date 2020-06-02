import React from 'react';
import ControlPanel from './ControlPanel';
import MatrixPanel from './MatrixPanel';

import { connect, ConnectedProps } from 'react-redux';
import {
  ClearMatrix,
  ChangeSelectedMatrix,
  MultiplyMatrix,
  ChangeBackground,
  ChangePlace,
  ChangeMatrixA,
  ChangeMatrixB,
  AddColumn,
  AddRow,
  DeleteColumn,
  DeleteRow,
} from '../actions';
import { Matrix, MatrixName, Colors } from '../types/types';

export interface State {
  matrixA: Matrix;
  matrixB: Matrix;
  matrixC: Matrix;
  selectMatrix: MatrixName;
  color: Colors;
  error?: string;
}
const App = (props: Props) => {
  return (
    <>
      <ControlPanel
        color={props.color}
        selectedMatrixToAction={props.selectMatrix}
        onAddColumn={props.AddColumn}
        onAddRow={props.AddRow}
        onDeleteColumn={props.DeleteColumn}
        onDeleteRow={props.DeleteRow}
        onChangeSelectedMatrix={props.ChangeSelectedMatrix}
        onChangePlaces={props.ChangePlace}
        onMultiplication={props.MultiplyMatrix}
        onClear={props.ClearMatrix}
        error={props.error}
      />
      <MatrixPanel
        matrixA={props.matrixA}
        matrixB={props.matrixB}
        matrixC={props.matrixC}
        onChangeMatrixA={props.ChangeMatrixA}
        onChangeMatrixB={props.ChangeMatrixB}
        onChangeBackground={props.ChangeBackground}
      />
    </>
  );
};

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

const mapDispatchToProps = {
  ClearMatrix,
  ChangeSelectedMatrix,
  MultiplyMatrix,
  ChangeBackground,
  ChangePlace,
  ChangeMatrixA,
  ChangeMatrixB,
  AddColumn,
  AddRow,
  DeleteColumn,
  DeleteRow,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;
export default connector(App);
