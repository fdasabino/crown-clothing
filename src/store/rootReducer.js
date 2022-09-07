import { combineReducers } from "redux";

//reducers
import { userReducer } from "./user/userReducer";
import { categoriesReducer } from "./categories/categoriesReducer";

//reducer being combined into one function
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
