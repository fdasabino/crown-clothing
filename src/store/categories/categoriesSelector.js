import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  console.log("Selector 1 runs now");
  return state.categories;
};

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => {
  console.log("Selector 2 runs now");
  return categoriesSlice.categories;
});

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    console.log("Selector 3 runs now");
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
