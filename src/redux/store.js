import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import rootReducer from "./reducers";

export const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, logger, thunk)
);

export const persistor = persistStore(store);
export default { store };
