import React from 'react';
import { Input } from '@skbkontur/react-ui';
import { Colors, Matrix as MatrixType } from '../types/types';

interface Props {
  matrix: MatrixType;
  name: string;
  onChange?: (matrix: MatrixType) => void;
  onChangeBackground?: (color: Colors) => void;
  disabled?: boolean;
}

export const Matrix = (props: Props) => {
  function handleChangeValue(
    rowIndex: number,
    colIndex: number,
    value: string,
  ) {
    if (props.onChange != null && !isNaN(Number(value))) {
      const matrix = props.matrix;
      const column = [...props.matrix[rowIndex]];
      column[colIndex] = Number(value);
      props.onChange([
        ...matrix.slice(0, rowIndex),
        column,
        ...matrix.slice(rowIndex + 1),
      ]);
    }
  }

  function handleChangeBackground(color: Colors) {
    if (props.onChangeBackground != null) {
      props.onChangeBackground(color);
    }
  }

  function renderColumn(array: Array<number | undefined>, rowIndex: number) {
    return array.map((col: number | undefined, colIndex: number) => (
      <td key={colIndex}>
        <Input
          width={45}
          align={'center'}
          placeholder={`${props.name}${rowIndex},${colIndex}`}
          type="text"
          value={col == null ? '' : col + ''}
          onValueChange={(value) =>
            handleChangeValue(rowIndex, colIndex, value)
          }
          onFocus={() => {
            handleChangeBackground(Colors.edit);
          }}
          onBlur={() => {
            handleChangeBackground(Colors.default);
          }}
          disabled={props.disabled}
        />
      </td>
    ));
  }

  function renderMatrix() {
    return props.matrix.map(
      (row: Array<number | undefined>, rowIndex: number) => (
        <tr key={rowIndex}>{renderColumn(row, rowIndex)}</tr>
      ),
    );
  }

  return (
    <div className="matrix">
      <i className="left"></i>
      <div className="MatrixTable">
        <table>
          <tbody>{renderMatrix()}</tbody>
        </table>
      </div>
      <i className="right"></i>
    </div>
  );
};

export default Matrix;
