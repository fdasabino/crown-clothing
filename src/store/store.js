import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [process.env.NODE_ENV === "development" && logger, sagaMiddleware].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  composeWithDevTools;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
