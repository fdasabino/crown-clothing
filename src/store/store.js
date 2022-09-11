import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);
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

export const persistor = persistStore(store);
