import { createSelector } from "reselect";
import { CategoriesInitialState } from "./categoriesReducer";
import { CategoryMap } from "./categoriesActionTypes";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState): CategoriesInitialState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
