import React from 'react';
import { MatrixName } from '../types/types';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Button, Divider, ButtonGroup } from 'react-native-elements';

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
  function handleChangeSelectedMatrix(value: number) {
    props.onChangeSelectedMatrix(value ? MatrixName.B : MatrixName.A);
  }

  return (
    <ScrollView style={styles.root}>
      <View style={styles.row}>
        <Button
          onPress={props.onMultiplication}
          title={'Умножить матрицы'}
          buttonStyle={{ backgroundColor: 'green' }}
          containerStyle={{ flexGrow: 1 }}
        />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.row}>
        <Button
          icon={{ name: 'undo', color: 'white' }}
          onPress={props.onClear}
          title={'Очистить матрицы'}
          containerStyle={{ flexGrow: 1 }}
        />
      </View>
      <View style={styles.row}>
        <Button
          icon={{ name: 'swap-vert', color: 'white' }}
          onPress={props.onChangePlaces}
          title={'Поменять матрицы местами'}
          containerStyle={{ flexGrow: 1 }}
        />
      </View>
      <Divider style={styles.divider} />
      <View>
        <ButtonGroup
          buttons={['Матрица А', 'Матрица B']}
          onPress={handleChangeSelectedMatrix}
          selectedIndex={props.selectedMatrixToAction === MatrixName.A ? 0 : 1}
          containerStyle={{ ...styles.root, height: 30 }}
          selectedButtonStyle={{ backgroundColor: 'gray' }}
        />
      </View>
      <View style={styles.row}>
        <Button
          onPress={props.onAddRow}
          title={'Добавить'}
          icon={{ name: 'add', color: 'white', size: 13 }}
          containerStyle={styles.button}
        />
        <Button
          onPress={props.onDeleteRow}
          title={'Удалить'}
          icon={{ name: 'remove', color: 'white', size: 13 }}
          containerStyle={styles.button}
        />
        <Text style={styles.buttonDesc}>Строку</Text>
      </View>
      <View style={styles.row}>
        <Button
          onPress={props.onAddColumn}
          title={'Добавить'}
          icon={{ name: 'add', color: 'white', size: 13 }}
          containerStyle={styles.button}
        />
        <Button
          onPress={props.onDeleteColumn}
          title={'Удалить'}
          icon={{ name: 'remove', color: 'white', size: 13 }}
          containerStyle={styles.button}
        />
        <Text style={styles.buttonDesc}>Столбец</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 5,
    marginBottom: 5,
  },
  row: {
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  divider: { marginBottom: 15, marginTop: 15 },
  button: {
    flexGrow: 1,
    marginRight: 5,
  },
  buttonDesc: {
    width: 70,
  },
});

export default ControlPanel;
