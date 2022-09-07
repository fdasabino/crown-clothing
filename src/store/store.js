import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
