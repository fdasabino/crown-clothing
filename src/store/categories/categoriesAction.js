import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";
import { createAction } from "../../reducer/reducerUtils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
