import React, { useState } from 'react';
import {
  TouchableHighlight,
  Modal,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import { Matrix as MatrixType } from '../types/types';
import MatrixView from './MatrixView';

interface Props {
  matrix: MatrixType;
  onChange?: (matrix: MatrixType) => void;
  disabled?: boolean;
}

export const Matrix = (props: Props) => {
  const [editable, handleChangeEditable] = useState(false);
  const [modalMatrix, handleChangeMatrix] = useState(props.matrix);

  function handleApplyChanges() {
    if (props.onChange != null) {
      props.onChange(modalMatrix);
    }
    handleChangeEditable(false);
  }

  return (
    <View>
      {!props.disabled && (
        <Modal animationType="fade" transparent={true} visible={editable}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <MatrixView matrix={modalMatrix} onChange={handleChangeMatrix} />
              <View style={styles.footer}>
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
      )}

      <TouchableHighlight
        onPress={() => {
          !props.disabled && handleChangeEditable(true);
        }}>
        <MatrixView matrix={props.matrix} disabled />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
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
  footer: { flexDirection: 'row', alignItems: 'stretch', marginTop: 5 },
});
export default Matrix;
