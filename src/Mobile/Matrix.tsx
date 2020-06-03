import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Matrix as MatrixType, MatrixName } from '../types/types';
import MatrixView from './MatrixView';
import { Overlay, Button } from 'react-native-elements';

interface Props {
  matrix: MatrixType;
  name?: MatrixName;
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
        <Overlay isVisible={editable}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 16 }}>{`Матрица ${
              props.name || ''
            }`}</Text>
            <MatrixView matrix={modalMatrix} onChange={handleChangeMatrix} />
            <View style={styles.footer}>
              <Button
                title="Готово"
                onPress={handleApplyChanges}
                containerStyle={{ marginRight: 5 }}></Button>
              <Button
                title="Отмена"
                buttonStyle={{ backgroundColor: '#aaa' }}
                onPress={() => {
                  handleChangeMatrix(props.matrix);
                  handleChangeEditable(false);
                }}></Button>
            </View>
          </View>
        </Overlay>
      )}

      {!props.disabled ? (
        <TouchableOpacity
          onPress={() => {
            handleChangeEditable(true);
          }}>
          <MatrixView matrix={props.matrix} disabled />
        </TouchableOpacity>
      ) : (
        <MatrixView matrix={props.matrix} disabled />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    padding: 20,
    alignItems: 'center',
  },
  footer: { flexDirection: 'row', alignItems: 'stretch', paddingTop: 15 },
});
export default Matrix;
