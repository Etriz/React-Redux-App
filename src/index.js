import React from "react";
import ReactDOM from "react-dom";
import { createStore, Provider } from "react-redux";

import "./css/index.css";
import App from "./App";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
