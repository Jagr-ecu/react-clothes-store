import { CATEGORIES_ACTION_TYPES } from "./CategoriesTypes";

export const setCategories = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categoriesArray,
});
