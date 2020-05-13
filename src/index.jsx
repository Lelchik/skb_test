import "./styles.css";
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
