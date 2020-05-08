/* eslint camelcase: 0 */
/* eslint-disable */

// при удалениии проверять на 0
import {
  CLEAR_MATRIX,
  SET_VALUE,
  DELETE_ROW_OR_COL,
  CHANGE_SELECTED_MATRIX,
  ADD_ROW_OR_COL,
  MULTIPLY_MATRIX,
  CHANGE_COLOR,
  CHANGE_PLACE,
} from "../constants";
const emptyState = {
  matrixA: {
    col: 3,
    row: 3,
    array: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    name: "a",
  },
  matrixB: {
    col: 3,
    row: 3,
    array: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    name: "b",
  },
  matrixC: {
    col: 3,
    row: 3,
    array: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    name: "c",
  },
  selectMatrix: "matrixA",
  error: "",
  color: "grey",
};
export default function reducer(state = emptyState, { type, ...data }) {
  console.log(state);
  switch (type) {
    case CLEAR_MATRIX:
      var newState = state;
      let key;
      for (key in newState) {
        if (key !== "selectMatrix" && key !== "error" && key !== "color")
          newState[key].array = Array.from({ length: newState[key].row }, () =>
            Array.from({ length: newState[key].col }, () => "")
          );
      }
      console.log(newState);
      return {
        ...state,
        matrixA: { ...newState.matrixA },
        matrixB: { ...newState.matrixB },
        matrixC: { ...newState.matrixC },
      };
    case SET_VALUE:
      console.log(data);
      newState = state;
      let matrixKey = "";
      switch (data.name) {
        case "a": {
          matrixKey = "matrixA";
          break;
        }
        case "b": {
          matrixKey = "matrixB";
          break;
        }
        case "c": {
          matrixKey = "matrixC";
          break;
        }
      }
      newState[matrixKey].array[data.row][data.col] = data.value;
      console.log(newState);
      return {
        ...state,
        matrixA: { ...newState.matrixA },
        matrixB: { ...newState.matrixB },
        matrixC: { ...newState.matrixC },
        color: "#5199db",
      };
    case CHANGE_SELECTED_MATRIX:
      let select = state.selectMatrix == "matrixA" ? "matrixB" : "matrixA";
      console.log(select);
      return {
        ...state,
        selectMatrix: select,
      };
    case DELETE_ROW_OR_COL:
      console.log(data);
      let error = state.error;
      let color = state.color;
      newState = state;
      key = state.selectMatrix;
      if (data.data) {
        //удалить столбец
        if (newState[key].col > 1) {
          newState[key].col--;
          newState[key].array.map(function (el) {
            console.log(el);
            return el.pop();
          });
          if (key === "matrixB") {
            newState.matrixC.col--;
            newState.matrixC.array.map(function (el) {
              return el.pop();
            });
          }
        } else {
          error =
            "невозможно удалить столбец! Количество столбцов у матрицы больше 1";
          color = "#f6c1c0";
        }
      } else {
        //удалить строку
        if (newState[key].row > 1) {
          newState[key].row--;
          newState[key].array.pop();
          if (key === "matrixA") {
            newState.matrixC.row--;
            newState.matrixC.array.pop();
          }
        } else {
          error =
            "невозможно удалить строку! Количество строк у матрицы больше 1";
          color = "#f6c1c0";
        }
      }
      console.log(newState);
      return {
        ...state,
        matrixA: { ...newState.matrixA },
        matrixB: { ...newState.matrixB },
        matrixC: { ...newState.matrixC },
        error: error,
        color: color,
      };
    case ADD_ROW_OR_COL:
      newState = state;
      key = state.selectMatrix;
      console.log(key);
      if (data.data) {
        //добавить столбец
        newState[key].col++;
        newState[key].array.map(function (el, id) {
          console.log(el, id);
          return el.push("");
        });
        if (key === "matrixB") {
          newState.matrixC.col++;
          newState.matrixC.array.map(function (el, id) {
            return el.push("");
          });
        }
      } else {
        //добавить строку
        newState[key].row++;
        newState[key].array.push(
          Array.from({ length: newState[key].col }, () => "")
        );
        if (key === "matrixA") {
          newState.matrixC.row++;
          newState.matrixC.array.push(
            Array.from({ length: newState.matrixC.col }, () => "")
          );
        }
      }
      //console.log(newState);
      return {
        ...state,
        matrixA: { ...newState.matrixA },
        matrixB: { ...newState.matrixB },
        matrixC: { ...newState.matrixC },
      };
    case MULTIPLY_MATRIX:
      if (state.matrixA.col !== state.matrixB.row)
        return {
          ...state,
          error:
            "количество столбцов матрицы А не равно количеству строк матрицы В",
          color: "#f6c1c0",
        };
      if (!state.matrixA.array.every((el) => el.every((e) => e !== ""))) {
        return {
          ...state,
          error: "не все ячейки матрицы А заполнены",
          color: "#f6c1c0",
        };
      }
      if (!state.matrixB.array.every((el) => el.every((e) => e !== ""))) {
        return {
          ...state,
          error: "не все ячейки матрицы B заполнены",
          color: "#f6c1c0",
        };
      }

      for (var k = 0; k < state.matrixB.col; k++) {
        for (var i = 0; i < state.matrixA.row; i++) {
          var t = 0;
          for (var j = 0; j < state.matrixB.row; j++)
            t += state.matrixA.array[i][j] * state.matrixB.array[j][k];
          state.matrixC.array[i][k] = t;
        }
      }

      return {
        ...state,
        matrixA: { ...state.matrixA },
        matrixB: { ...state.matrixB },
        matrixC: { ...state.matrixC },
        error: "",
        color: "grey",
      };
    case CHANGE_COLOR:
      return {
        ...state,
        color: data.data,
      };
    case CHANGE_PLACE:
      let matrixB = state.matrixA;
      matrixB.name = "b";
      let matrixA = state.matrixB;
      matrixA.name = "a";
      let matrixC = state.matrixC;
      matrixC.col = matrixB.col;
      matrixC.row = matrixA.row;
      matrixC.array = Array.from({ length: matrixC.row }, () =>
        Array.from({ length: matrixC.col }, () => "")
      );
      return {
        ...state,
        matrixA: { ...matrixA },
        matrixB: { ...matrixB },
        matrixC: { ...matrixC },
      };
    default:
      return state;
  }
}
