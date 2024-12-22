import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import todoReducer from "./todo/todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
