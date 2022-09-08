import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";//opcional

import { rootReducer } from "./RootReducer";

const middlewares = [logger]
const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composedEnhancers)