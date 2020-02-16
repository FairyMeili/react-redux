import React, { Component } from "react";
import { createStore, applyMiddleware } from "./store/myRedux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const countReducer = function(state = 1, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    case "asyncAdd":
      return state + 2;
    default:
      return state;
  }
};
const store = createStore(countReducer, applyMiddleware(logger, thunk));
class ReduxTest extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  render() {
    return (
      <div>
        {/* 获取store状态 */}
        <button
          onClick={() => {
            store.dispatch({ type: "add" });
          }}
        >
          +
        </button>
        <span>redux测试{store.getState() || 0}</span>
        <button
          onClick={() => {
            store.dispatch({
              type: "minus"
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default ReduxTest;
