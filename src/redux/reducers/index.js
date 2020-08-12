import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import auth from "./auth";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
  debug: false,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
});

export default persistReducer(persistConfig, rootReducer);
