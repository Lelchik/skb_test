import {
  AddRowAction,
  ADD_ROW,
  AddColumnAction,
  DeleteColumnAction,
  DeleteRowAction,
  ADD_COLUMN,
  DELETE_COLUMN,
  DELETE_ROW,
  ClearMatrixAction,
  ChangeSelectedMatrixAction,
  MultiplyMatrixAction,
  ChangeColorAction,
  ChangePlaceAction,
  ChangeMatrixBAction,
  ChangeMatrixAAction,
  CHANGE_MATRIX_A,
  CHANGE_MATRIX_B,
  CLEAR_MATRIX,
  CHANGE_SELECTED_MATRIX,
  MULTIPLY_MATRIX,
  CHANGE_COLOR,
  CHANGE_PLACE,
  Colors,
  Matrix,
} from "../types";

export function ClearMatrix(): ClearMatrixAction {
  return {
    type: CLEAR_MATRIX,
  };
}

export function ChangeSelectedMatrix(): ChangeSelectedMatrixAction {
  return {
    type: CHANGE_SELECTED_MATRIX,
  };
}

export function MultiplyMatrix(): MultiplyMatrixAction {
  return {
    type: MULTIPLY_MATRIX,
  };
}
export function ChangeBackground(color: Colors): ChangeColorAction {
  return {
    type: CHANGE_COLOR,
    data: { color: color },
  };
}
export function ChangePlace(): ChangePlaceAction {
  return {
    type: CHANGE_PLACE,
  };
}
// NEW
export function ChangeMatrixA(matrix: Matrix): ChangeMatrixAAction {
  return {
    type: CHANGE_MATRIX_A,
    data: { matrix: matrix },
  };
}

export function ChangeMatrixB(matrix: Matrix): ChangeMatrixBAction {
  return {
    type: CHANGE_MATRIX_B,
    data: { matrix: matrix },
  };
}

export function AddColumn(): AddColumnAction {
  return { type: ADD_COLUMN };
}
export function AddRow(): AddRowAction {
  return {
    type: ADD_ROW,
  };
}
export function DeleteColumn(): DeleteColumnAction {
  return { type: DELETE_COLUMN };
}
export function DeleteRow(): DeleteRowAction {
  return { type: DELETE_ROW };
}
