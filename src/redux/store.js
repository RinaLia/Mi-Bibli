import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import rootReducer from "./reducers";

export const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, logger)
);

export const persistor = persistStore(store);
export default { store };
