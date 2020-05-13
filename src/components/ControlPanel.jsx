import React from "react";
import { Button, RadioGroup, Radio } from "@skbkontur/react-ui";
import UndoIcon from "@skbkontur/react-icons/Undo";
import ArrowParallelVerticalIcon from "@skbkontur/react-icons/ArrowParallelVertical";
import AddIcon from "@skbkontur/react-icons/Add";
import RemoveIcon from "@skbkontur/react-icons/Remove";

export const ControlPanel = (props) => {
  return (
    <div
      className="ControlPanel"
      style={{
        background: props.color,
      }}
    >
      <Button onClick={props.MultiplyMatrix} use="success" arrow>
        Умножить матрицы
      </Button>
      <div className="Spacer" />
      <div className="ControlRow">
        <Button use="primary" onClick={props.ClearMatrix} icon={<UndoIcon />}>
          Очистить матрицы
        </Button>
      </div>
      <div className="ControlRow">
        <Button
          use="primary"
          onClick={props.ChangePlace}
          icon={<ArrowParallelVerticalIcon />}
        >
          Поменять матрицы местами
        </Button>
      </div>
      <div className="Spacer" />
      <div className="ControlRow">
        <RadioGroup
          value={props.selectMatrix}
          onValueChange={props.ChangeSelectedMatrix}
        >
          <Radio value="matrixA">Матрица А</Radio>{" "}
          <Radio value="matrixB">Матрица B</Radio>
        </RadioGroup>
      </div>
      <div className="ControlRow">
        <Button onClick={(e) => props.AddRowOrCol(0)} icon={<AddIcon />}>
          Добавить
        </Button>
        <Button onClick={(e) => props.DeleteRowOrCol(0)} icon={<RemoveIcon />}>
          Удалить
        </Button>
        Строку
      </div>
      <div className="ControlRow">
        <Button onClick={(e) => props.AddRowOrCol(1)} icon={<AddIcon />}>
          Добавить
        </Button>
        <Button onClick={(e) => props.DeleteRowOrCol(1)} icon={<RemoveIcon />}>
          Удалить
        </Button>
        Столбец
      </div>

      <div className="Spacer" />
      <div className="ControlRow">
        <span
          style={{
            maxWidth: "200px",
            display: "inline-block",
            color: "red",
            fontWeight: "bold",
          }}
        >
          {props.error}
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;
