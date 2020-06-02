import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Matrix as MatrixType } from '../types/types';

interface Props {
  matrix: MatrixType;
  disabled?: boolean;
  onChange?: (matrix: MatrixType) => void;
}

export const MatrixView = (props: Props) => {
  function handleChangeValue(
    rowIndex: number,
    colIndex: number,
    value: string,
  ) {
    if (props.onChange != null && !isNaN(Number(value))) {
      const column = [...props.matrix[rowIndex]];
      column[colIndex] = Number(value);
      props.onChange([
        ...props.matrix.slice(0, rowIndex),
        column,
        ...props.matrix.slice(rowIndex + 1),
      ]);
    }
  }

  function renderColumn(array: Array<number | undefined>, rowIndex: number) {
    return array.map((col: number | undefined, colIndex: number) => (
      <View
        key={colIndex}
        style={colIndex === array.length - 1 ? styles.lastCell : styles.cell}>
        {!props.disabled ? (
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={col == null ? '' : col + ''}
            onChangeText={(value) =>
              handleChangeValue(rowIndex, colIndex, value)
            }
          />
        ) : (
          <Text style={styles.value}>{col == null ? '_' : col}</Text>
        )}
      </View>
    ));
  }

  function renderMatrix() {
    return props.matrix.map(
      (row: Array<number | undefined>, rowIndex: number) => (
        <View style={styles.row} key={rowIndex}>
          {renderColumn(row, rowIndex)}
        </View>
      ),
    );
  }

  return (
    <View
      style={{ display: 'flex', alignItems: 'stretch', flexDirection: 'row' }}>
      <View style={{ ...styles.border, ...styles.leftBorder }} />
      <View style={styles.matrix}>{renderMatrix()}</View>
      <View style={{ ...styles.border, ...styles.rightBorder }} />
    </View>
  );
};

const styles = StyleSheet.create({
  matrix: {
    padding: 3,
  },
  border: {
    width: 3,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
  },
  rightBorder: {
    borderLeftColor: 'white',
    borderLeftWidth: 0,
  },
  leftBorder: {
    borderRightColor: 'white',
    borderRightWidth: 0,
  },

  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  cell: {
    marginLeft: 5,
  },
  lastCell: {
    marginRight: 5,
    marginLeft: 5,
  },
  input: {
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  value: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default MatrixView;
