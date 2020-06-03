import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  ClearMatrix,
  ChangeSelectedMatrix,
  MultiplyMatrix,
  ChangeBackground,
  ChangePlace,
  ChangeMatrixA,
  ChangeMatrixB,
  AddColumn,
  AddRow,
  DeleteColumn,
  DeleteRow,
} from '../actions/index';
import { Matrix, MatrixName, Colors } from '../types/types';
import MatrixPanel from './MatrixPanel';
import ControlPanel from './ControlPanel';
import { Header, Button } from 'react-native-elements';
import {
  SafeAreaView,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
} from 'react-native';

export interface State {
  matrixA: Matrix;
  matrixB: Matrix;
  matrixC: Matrix;
  selectMatrix: MatrixName;
  color: Colors;
  error?: string;
}
const App = (props: Props) => {
  let drawer: DrawerLayoutAndroid | null = null;

  function openMenu() {
    drawer != null && drawer.openDrawer();
  }

  function closeMenu() {
    drawer != null && drawer.closeDrawer();
  }

  const menu = (
    <ControlPanel
      selectedMatrixToAction={props.selectMatrix}
      onAddColumn={props.AddColumn}
      onAddRow={props.AddRow}
      onDeleteColumn={props.DeleteColumn}
      onDeleteRow={props.DeleteRow}
      onChangeSelectedMatrix={props.ChangeSelectedMatrix}
      onChangePlaces={() => {
        props.ChangePlace();
        closeMenu();
      }}
      onMultiplication={() => {
        props.MultiplyMatrix();
        closeMenu();
      }}
      onClear={() => {
        props.ClearMatrix();
        closeMenu();
      }}
      error={props.error}
    />
  );

  return (
    <SafeAreaView style={styles.root}>
      <DrawerLayoutAndroid
        drawerWidth={300}
        // @ts-ignore
        drawerPosition={'left'}
        ref={(el) => (drawer = el)}
        renderNavigationView={() => menu}>
        <Header
          leftComponent={
            <Button
              buttonStyle={{ backgroundColor: props.color }}
              icon={{ name: 'menu', color: 'white' }}
              onPress={openMenu}
            />
          }
          centerComponent={
            <Button
              title="Умножить матрицы"
              type="outline"
              titleStyle={{ color: 'white' }}
              buttonStyle={{ borderColor: 'white', backgroundColor: 'green' }}
              onPress={props.MultiplyMatrix}
            />
          }
          containerStyle={{ backgroundColor: props.color }}
        />

        <MatrixPanel
          matrixA={props.matrixA}
          matrixB={props.matrixB}
          matrixC={props.matrixC}
          onChangeMatrixA={props.ChangeMatrixA}
          onChangeMatrixB={props.ChangeMatrixB}
          onChangeBackground={props.ChangeBackground}
        />

        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            margin: 10,
          }}>
          {props.error}
        </Text>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

function mapStateToProps(state: State) {
  return {
    ...state,
  };
}

const mapDispatchToProps = {
  ClearMatrix,
  ChangeSelectedMatrix,
  MultiplyMatrix,
  ChangeBackground,
  ChangePlace,
  ChangeMatrixA,
  ChangeMatrixB,
  AddColumn,
  AddRow,
  DeleteColumn,
  DeleteRow,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;
export default connector(App);
