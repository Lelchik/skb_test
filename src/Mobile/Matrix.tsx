import React, { useState } from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
import { Matrix as MatrixType } from '../types/types';
import MatrixView from './MatrixView';
import { Overlay, Button } from 'react-native-elements';

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
        <Overlay isVisible={editable}>
          <View style={styles.modalView}>
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
  modalView: {
    padding: 20,
    alignItems: 'center',
  },
  footer: { flexDirection: 'row', alignItems: 'stretch', paddingTop: 15 },
});
export default Matrix;
