import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
  Middleware
} from "redux";
import logger from "redux-logger"; //opcional
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage para redux
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./RootSaga";
import { rootReducer } from "./RootReducer";

export type RootState = ReturnType<typeof rootReducer>

declare global{
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware]
  .filter((middleware): middleware is Middleware => Boolean(middleware)); //filter(Boolean) retorna "[]" si es falso

const composeEnhancer =
  (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) 
  || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

//export const store = createStore(rootReducer, undefined, composedEnhancers)
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
