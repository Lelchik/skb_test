import React from 'react';
import Matrix from './Matrix';
import { Colors, Matrix as MatrixType } from '../types/types';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';

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
        <Card>
          <Matrix matrix={props.matrixC} disabled />
        </Card>
        <Card>
          <View style={styles.container}>
            <Matrix matrix={props.matrixA} onChange={props.onChangeMatrixA} />
            <Text style={{ ...styles.name, paddingLeft: 5 }}>A</Text>
          </View>
        </Card>
      </View>
      <View style={styles.container}>
        <Card>
          <Matrix matrix={props.matrixB} onChange={props.onChangeMatrixB} />
          <Text
            style={{
              ...styles.name,
              paddingLeft: props.matrixB.length * 10,
            }}>
            B
          </Text>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    margin: 15,
  },
  name: {
    fontSize: 20,
  },
});

export default MatrixPanel;
