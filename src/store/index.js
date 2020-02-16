import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { countReducer } from "./countReducer";
// 1.创建store
// 2.创建reducer

const store = createStore(countReducer, applyMiddleware(logger, thunk));

export default store;
