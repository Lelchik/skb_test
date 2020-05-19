export const CLEAR_MATRIX = "CLEAR_MATRIX";
export const CHANGE_SELECTED_MATRIX = "CHANGE_SELECTED_MATRIX";
export const MULTIPLY_MATRIX = "MULTIPLY_MATRIX";
export const CHANGE_COLOR = "CHANGE_COLOR";
export const CHANGE_PLACE = "CHANGE_PLACE";
export const ADD_ROW = "ADD_ROW";
export const DELETE_ROW = "DELETE_ROW";
export const ADD_COLUMN = "ADD_COLUMN";
export const DELETE_COLUMN = "DELETE_COLUMN";
export const CHANGE_MATRIX_A = "CHANGE_MATRIX_A";
export const CHANGE_MATRIX_B = "CHANGE_MATRIX_B";

export enum Colors {
  default = "#bcbcbc",
  edit = "#5199db",
  error = "#f6c1c0",
}

export type Matrix = Array<Array<number | undefined>>;

export enum MatrixName {
  A = "A",
  B = "B",
}

export interface ClearMatrixAction {
  type: typeof CLEAR_MATRIX;
}

export interface ChangeSelectedMatrixAction {
  type: typeof CHANGE_SELECTED_MATRIX;
}

export interface ChangeColorAction {
  type: typeof CHANGE_COLOR;
  data: {
    color: Colors;
  };
}

export interface ChangePlaceAction {
  type: typeof CHANGE_PLACE;
}

export interface MultiplyMatrixAction {
  type: typeof MULTIPLY_MATRIX;
}

export interface AddRowAction {
  type: typeof ADD_ROW;
}

export interface DeleteRowAction {
  type: typeof DELETE_ROW;
}

export interface AddColumnAction {
  type: typeof ADD_COLUMN;
}

export interface DeleteColumnAction {
  type: typeof DELETE_COLUMN;
}

export interface ChangeMatrixAAction {
  type: typeof CHANGE_MATRIX_A;
  data: {
    matrix: Matrix;
  };
}
export interface ChangeMatrixBAction {
  type: typeof CHANGE_MATRIX_B;
  data: {
    matrix: Matrix;
  };
}

export type MyltiplyMatrixTypes =
  | ClearMatrixAction
  | ChangeSelectedMatrixAction
  | ChangeColorAction
  | ChangePlaceAction
  | MultiplyMatrixAction
  | AddRowAction
  | AddColumnAction
  | DeleteRowAction
  | DeleteColumnAction
  | ChangeMatrixAAction
  | ChangeMatrixBAction;
