import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";
import { createAction } from "../../reducer/reducerUtils";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
