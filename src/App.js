import React from "react";
import ReduxTest from "./ReduxTest";
import ReactRedux from "./reactReduxTest";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReduxTest />
        {/* <ReactRedux /> */}
      </div>
    </Provider>
  );
}

export default App;
