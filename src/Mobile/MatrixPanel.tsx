import React from 'react';
import Matrix from './Matrix';
import { Colors, Matrix as MatrixType } from '../types';

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
    <Matrix
      matrix={props.matrixA}
      disabled
      name="a"
      onChange={props.onChangeMatrixA}></Matrix>
  );
};

export default MatrixPanel;
