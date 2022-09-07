import { USER_ACTION_TYPES } from "./userActionTypes";
import { createAction } from "../../reducer/reducerUtils";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
