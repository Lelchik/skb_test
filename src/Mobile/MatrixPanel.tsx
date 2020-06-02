import React from 'react';
import Matrix from './Matrix';
import { Colors, Matrix as MatrixType } from '../types/types';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
  matrixC: MatrixType;
  matrixA: MatrixType;
  matrixB: MatrixType;
  onChangeMatrixA: (value: MatrixType) => void;
  onChangeMatrixB: (value: MatrixType) => void;
  onChangeBackground: (value: Colors) => void;
}

export const MatrixPanel = (props: Props) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Matrix matrix={props.matrixC} disabled />
        </View>
        <View style={styles.item}>
          <Matrix matrix={props.matrixA} onChange={props.onChangeMatrixA} />
        </View>
        <View style={styles.item}>
          <Text style={styles.name}>A</Text>
        </View>
      </View>
      <View style={styles.matrixB}>
        <View style={styles.item}>
          <Matrix matrix={props.matrixB} onChange={props.onChangeMatrixB} />
        </View>
        <View style={styles.item}>
          <Text
            style={{
              ...styles.name,
              paddingLeft: props.matrixB.length * 10,
            }}>
            B
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    margin: 5,
  },
  matrixB: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: 20,
  },
});

export default MatrixPanel;
