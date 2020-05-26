import React from 'react';
import { Text } from 'react-native';
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
} from '../actions/index';
import { Matrix, MatrixName, Colors } from '../types';

export interface State {
  matrixA: Matrix;
  matrixB: Matrix;
  matrixC: Matrix;
  selectMatrix: MatrixName;
  color: Colors;
  error?: string;
}
const App = (props: Props) => {
  return <Text>{JSON.stringify(props, null, 4)}</Text>;
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
