/* eslint-disable */
import {
    CLEAR_MATRIX,
    SET_VALUE,
    DELETE_ROW_OR_COL,
    CHANGE_SELECTED_MATRIX,
    ADD_ROW_OR_COL,
    MULTIPLY_MATRIX,
    CHANGE_COLOR,
    CHANGE_PLACE
} from '../constants'

export function ClearMatrix(){
    return {
        type: CLEAR_MATRIX
    }
}
export function DeleteRowOrCol(data) {
    return {
        type: DELETE_ROW_OR_COL,
        data
    }
}
export function ChangeSelectedMatrix() {
    return {
        type: CHANGE_SELECTED_MATRIX
    }
}
export function SetValue(data){
    return {
        type: SET_VALUE,
        ...data
    }
}
export function AddRowOrCol(data){
    return {
        type: ADD_ROW_OR_COL,
        data
    }
}
export function MultiplyMatrix(){
    return {
        type: MULTIPLY_MATRIX
    }
}
export function ChangeBackground(data){
    return {
        type: CHANGE_COLOR,
        data
    }
}
export function ChangePlace(){
    console.log('chabge');
    return {
        type: CHANGE_PLACE
    }
}
