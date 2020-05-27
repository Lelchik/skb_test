import React, { useState } from 'react';
import {
  TouchableHighlight,
  Modal,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import { Matrix as MatrixType } from '../types';

interface Props {
  matrix: MatrixType;
  name: string;
  onChange?: (matrix: MatrixType) => void;
  disabled?: boolean;
}

export const Matrix = (props: Props) => {
  const [editable, handleChangeEditable] = useState(false);
  const [modalMatrix, handleChangeMatrix] = useState(props.matrix);
  function handleChangeValue(
    rowIndex: number,
    colIndex: number,
    value: string,
  ) {
    if (!isNaN(Number(value))) {
      const column = [...modalMatrix[rowIndex]];
      column[colIndex] = Number(value);
      handleChangeMatrix([
        ...modalMatrix.slice(0, rowIndex),
        column,
        ...modalMatrix.slice(rowIndex + 1),
      ]);
    }
  }

  function handleApplyChanges() {
    if (props.onChange != null) {
      props.onChange(modalMatrix);
    }
    handleChangeEditable(false);
  }

  function renderColumn(
    array: Array<number | undefined>,
    rowIndex: number,
    disabled?: boolean,
  ) {
    return array.map((col: number | undefined, colIndex: number) => (
      <View
        key={colIndex}
        style={colIndex === array.length - 1 ? styles.lastCell : styles.cell}>
        {disabled ? (
          <TextInput
            style={styles.input}
            placeholder={`${props.name}${rowIndex},${colIndex}`}
            keyboardType="number-pad"
            value={col == null ? '' : col + ''}
            onChangeText={(value) =>
              handleChangeValue(rowIndex, colIndex, value)
            }
            editable={props.disabled}
          />
        ) : (
          <Text style={styles.value}>{col == null ? '_' : col}</Text>
        )}
      </View>
    ));
  }

  function renderMatrix(matrix?: MatrixType, disabled?: boolean) {
    return (matrix || props.matrix).map(
      (row: Array<number | undefined>, rowIndex: number) => (
        <View style={styles.row} key={rowIndex}>
          {renderColumn(row, rowIndex, disabled)}
        </View>
      ),
    );
  }

  return (
    <View style={styles.root}>
      <Modal animationType="fade" transparent={true} visible={editable}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {renderMatrix(modalMatrix, true)}
            <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
              <Button title="Готово" onPress={handleApplyChanges}></Button>
              <Button
                title="Отмена"
                color="#aaa"
                onPress={() => {
                  handleChangeMatrix(props.matrix);
                  handleChangeEditable(false);
                }}></Button>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          handleChangeEditable(true);
        }}>
        <View
          style={styles.container}
          onTouchStart={() => handleChangeEditable(!editable)}>
          {renderMatrix()}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    padding: 5,
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
export default Matrix;
