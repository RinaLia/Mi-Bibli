import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers/index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const middleware = [thunk, logger];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middleware));
  let persistor = persistStore(store);
  return { store, persistor };
};
