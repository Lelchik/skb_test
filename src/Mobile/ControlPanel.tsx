import React from 'react';
import { MatrixName } from '../types/types';
import { ScrollView, Text, StyleSheet } from 'react-native';

interface Props {
  selectedMatrixToAction: MatrixName;
  error?: string;
  onChangeSelectedMatrix: (matrix: MatrixName) => void;
  onMultiplication: () => void;
  onClear: () => void;
  onChangePlaces: () => void;
  onAddRow: () => void;
  onAddColumn: () => void;
  onDeleteRow: () => void;
  onDeleteColumn: () => void;
}

export const ControlPanel = (props: Props) => {
  function handleChangeSelectedMatrix(value: unknown) {
    props.onChangeSelectedMatrix(value === 'A' ? MatrixName.A : MatrixName.B);
  }

  return (
    <ScrollView style={styles.menu}>
      <Text style={styles.item}>SomeText</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    padding: 20,
  },

  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default ControlPanel;
