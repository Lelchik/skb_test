import { State } from '../components/App';
import {
  CLEAR_MATRIX,
  CHANGE_SELECTED_MATRIX,
  MULTIPLY_MATRIX,
  CHANGE_COLOR,
  CHANGE_PLACE,
  MyltiplyMatrixTypes,
  ADD_ROW,
  DELETE_ROW,
  ADD_COLUMN,
  DELETE_COLUMN,
  CHANGE_MATRIX_A,
  CHANGE_MATRIX_B,
  MatrixName,
  Colors,
} from '../types';

const emptyState: State = {
  matrixA: createEmptyArray(3, 3),
  matrixB: createEmptyArray(3, 3),
  matrixC: createEmptyArray(3, 3),
  selectMatrix: MatrixName.A,
  color: Colors.default,
};
export default function reducer(
  state = emptyState,
  action: MyltiplyMatrixTypes,
): State {
  switch (action.type) {
    case CLEAR_MATRIX: {
      return {
        ...state,
        ...clearError(),
        matrixA: createEmptyArray(state.matrixA.length, state.matrixA.length),
        matrixB: createEmptyArray(state.matrixB.length, state.matrixB.length),
        matrixC: createEmptyArray(state.matrixC.length, state.matrixC.length),
      };
    }
    case CHANGE_SELECTED_MATRIX: {
      return {
        ...state,
        ...clearError(),
        selectMatrix:
          state.selectMatrix === MatrixName.A ? MatrixName.B : MatrixName.A,
      };
    }
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.data.color,
      };
    case CHANGE_PLACE:
      return {
        ...state,
        ...clearError(),
        matrixA: state.matrixB,
        matrixB: state.matrixA,
        matrixC: createEmptyArray(
          state.matrixB.length,
          state.matrixA[0].length,
        ),
      };

    case MULTIPLY_MATRIX: {
      const matrixAColCount = state.matrixA.length;
      const matrixCColCount = state.matrixC.length;
      const matrixCRowCount = state.matrixC[0].length;
      const matrixBRowCount = state.matrixB[0].length;
      if (matrixAColCount !== matrixBRowCount)
        return {
          ...state,
          error:
            'количество столбцов матрицы А не равно количеству строк матрицы В',
          color: Colors.error,
        };
      if (state.matrixA.some((el) => el.some((e) => e === undefined))) {
        return {
          ...state,
          error: 'не все ячейки матрицы А заполнены',
          color: Colors.error,
        };
      }
      if (state.matrixB.some((el) => el.some((e) => e === undefined))) {
        return {
          ...state,
          error: 'не все ячейки матрицы B заполнены',
          color: Colors.error,
        };
      }

      for (var k = 0; k < matrixCRowCount; k++) {
        for (var i = 0; i < matrixCColCount; i++) {
          state.matrixC[i][k] = state.matrixB.reduce(
            (sum: number, col: Array<number | undefined>, j: number) => {
              // @ts-ignore
              sum += state.matrixA[i][j] * col[k];
              return sum;
            },
            0,
          );
        }
      }

      return {
        ...state,
        ...clearError(),
        matrixC: [...state.matrixC],
        error: '',
        color: Colors.default,
      };
    }
    case ADD_ROW: {
      const matrix =
        state.selectMatrix === MatrixName.A
          ? [...state.matrixA]
          : [...state.matrixB];
      const colsCount = matrix[0].length;
      matrix.push(Array.from({ length: colsCount }));
      const matrixC =
        state.selectMatrix === MatrixName.A
          ? [...state.matrixC]
          : state.matrixC;
      if (state.selectMatrix === MatrixName.A) {
        matrixC.push(Array.from({ length: matrixC[0].length }));
      }
      return {
        ...state,
        matrixA: state.selectMatrix === MatrixName.A ? matrix : state.matrixA,
        matrixB: state.selectMatrix === MatrixName.B ? matrix : state.matrixB,
        matrixC: matrixC,
      };
    }
    case DELETE_ROW: {
      const matrix =
        state.selectMatrix === MatrixName.A
          ? [...state.matrixA]
          : [...state.matrixB];
      if (matrix.length === 1) {
        return {
          ...state,
          color: Colors.default,
          error: 'невозможно удалить последнюю строку!',
        };
      }
      matrix.pop();
      const matrixC =
        state.selectMatrix === MatrixName.A
          ? [...state.matrixC]
          : state.matrixC;
      if (state.selectMatrix === MatrixName.A) {
        matrixC.pop();
      }
      return {
        ...state,
        ...clearError(),
        matrixA: state.selectMatrix === MatrixName.A ? matrix : state.matrixA,
        matrixB: state.selectMatrix === MatrixName.B ? matrix : state.matrixB,
        matrixC: matrixC,
      };
    }
    case ADD_COLUMN: {
      const matrix =
        state.selectMatrix === MatrixName.A
          ? [...state.matrixA]
          : [...state.matrixB];

      matrix.forEach((col) => col.push(undefined));
      const matrixC =
        state.selectMatrix === MatrixName.B
          ? [...state.matrixC]
          : state.matrixC;
      if (state.selectMatrix === MatrixName.B) {
        matrixC.forEach((col) => col.push(undefined));
      }
      return {
        ...state,
        ...clearError(),
        matrixA: state.selectMatrix === MatrixName.A ? matrix : state.matrixA,
        matrixB: state.selectMatrix === MatrixName.B ? matrix : state.matrixB,
        matrixC: matrixC,
      };
    }
    case DELETE_COLUMN: {
      const matrix =
        state.selectMatrix === MatrixName.A
          ? [...state.matrixA]
          : [...state.matrixB];
      if (matrix[0].length === 1) {
        return {
          ...state,
          error: `невозможно удалить последний столбец!`,
          color: Colors.default,
        };
      }
      matrix.forEach((col) => col.pop());
      const matrixC =
        state.selectMatrix === MatrixName.B
          ? [...state.matrixC]
          : state.matrixC;
      if (state.selectMatrix === MatrixName.B) {
        matrixC.forEach((col) => col.pop());
      }
      return {
        ...state,
        ...clearError(),
        matrixA: state.selectMatrix === MatrixName.A ? matrix : state.matrixA,
        matrixB: state.selectMatrix === MatrixName.B ? matrix : state.matrixB,
        matrixC: matrixC,
      };
    }
    case CHANGE_MATRIX_A:
      return {
        ...state,
        ...clearError(),
        matrixA: action.data.matrix,
      };
    case CHANGE_MATRIX_B:
      return {
        ...state,
        ...clearError(),
        matrixB: action.data.matrix,
      };

    default:
      return state;
  }
}

function createEmptyArray(
  rows: number,
  cols: number,
): Array<Array<number | undefined>> {
  return Array.from({ length: rows }).map(() => Array.from({ length: cols }));
}

function clearError() {
  return { error: '', color: Colors.default };
}
