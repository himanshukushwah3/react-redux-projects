import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import newsReducer from "./news/newsReducer";
import thunk from "redux-thunk";

const store = createStore(
  newsReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
