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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Matrix matrix={props.matrixC} disabled name="c" />
        <Matrix
          matrix={props.matrixA}
          onChange={props.onChangeMatrixA}
          onChangeBackground={props.onChangeBackground}
          name={'a'}
        />
        <div style={{ fontSize: 'x-large' }}>А</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Matrix
          matrix={props.matrixB}
          onChange={props.onChangeMatrixB}
          onChangeBackground={props.onChangeBackground}
          name={'b'}
        />
        <div
          style={{
            paddingLeft: `${38 * props.matrixB.length}px`,
            fontSize: 'x-large',
          }}>
          B
        </div>
      </div>
    </div>
  );
};

export default MatrixPanel;
