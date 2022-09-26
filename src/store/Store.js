import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger"; //opcional
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage para redux
import thunk from "redux-thunk";

import { rootReducer } from "./RootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV === "development" && logger, thunk].filter(
  Boolean
); //filter(Boolean) retorna "[]" si es falso

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

//export const store = createStore(rootReducer, undefined, composedEnhancers)
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
