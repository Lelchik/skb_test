import React from 'react';
import { AppRegistry } from 'react-native';
import AppInternal from './src/Mobile/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import reducer from './src/reducers/index';
import { createStore } from 'redux';

const App = () => {
  return (
    <Provider store={createStore(reducer)}>
      <AppInternal />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => App);
