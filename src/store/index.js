import { createStore, compose, applyMiddleware } from "redux";
import promiseMiddlewere from "redux-promise";
import reducers from "../reducers";
const componseEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  {},
  componseEnhancers(applyMiddleware(promiseMiddlewere))
);
