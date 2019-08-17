import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./component/root";
import store from "./redux/store";

const nodes = (
  <Provider store={store}>
    <Root />
  </Provider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(nodes, rootElement);
