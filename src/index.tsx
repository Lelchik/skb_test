import './styles.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
