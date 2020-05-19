import React from 'react';
import { Button, RadioGroup, Radio } from '@skbkontur/react-ui';
import UndoIcon from '@skbkontur/react-icons/Undo';
import ArrowParallelVerticalIcon from '@skbkontur/react-icons/ArrowParallelVertical';
import AddIcon from '@skbkontur/react-icons/Add';
import RemoveIcon from '@skbkontur/react-icons/Remove';
import { Colors, MatrixName } from '../types';

interface Props {
  color: Colors;
  selectedMatrixToAction: MatrixName;
  error?: string;
  onChangeSelectedMatrix: (matrix: MatrixName) => void;
  onMultiplication: () => void;
  onClear: () => void;
  onChangePlaces: () => void;
  onAddRow: () => void;
  onAddColumn: () => void;
  onDeleteRow: () => void;
  onDeleteColumn: () => void;
}

export const ControlPanel = (props: Props) => {
  function handleChangeSelectedMatrix(value: unknown) {
    props.onChangeSelectedMatrix(value === 'A' ? MatrixName.A : MatrixName.B);
  }

  return (
    <div
      className="ControlPanel"
      style={{
        background: props.color,
      }}>
      <Button onClick={props.onMultiplication} use="success" arrow>
        Умножить матрицы
      </Button>
      <div className="Spacer" />
      <div className="ControlRow">
        <Button use="primary" onClick={props.onClear} icon={<UndoIcon />}>
          Очистить матрицы
        </Button>
      </div>
      <div className="ControlRow">
        <Button
          use="primary"
          onClick={props.onChangePlaces}
          icon={<ArrowParallelVerticalIcon />}>
          Поменять матрицы местами
        </Button>
      </div>
      <div className="Spacer" />
      <div className="ControlRow">
        <RadioGroup
          value={props.selectedMatrixToAction}
          onValueChange={handleChangeSelectedMatrix}>
          <Radio value={MatrixName.A}>Матрица А</Radio>{' '}
          <Radio value={MatrixName.B}>Матрица B</Radio>
        </RadioGroup>
      </div>
      <div className="ControlRow">
        <Button onClick={props.onAddRow} icon={<AddIcon />}>
          Добавить
        </Button>
        <Button onClick={props.onDeleteRow} icon={<RemoveIcon />}>
          Удалить
        </Button>
        Строку
      </div>
      <div className="ControlRow">
        <Button onClick={props.onAddColumn} icon={<AddIcon />}>
          Добавить
        </Button>
        <Button onClick={props.onDeleteColumn} icon={<RemoveIcon />}>
          Удалить
        </Button>
        Столбец
      </div>

      <div className="Spacer" />
      <div className="ControlRow">
        <span
          style={{
            maxWidth: '200px',
            display: 'inline-block',
            color: 'red',
            fontWeight: 'bold',
          }}>
          {props.error}
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;
