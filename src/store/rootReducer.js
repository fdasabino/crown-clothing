import { combineReducers } from "redux";

//reducers
import { userReducer } from "./user/userReducer";

//reducer being combined into one function
export const rootReducer = combineReducers({
  user: userReducer,
});
