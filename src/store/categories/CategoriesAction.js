import { CATEGORIES_ACTION_TYPES } from "./CategoriesTypes";

export const setCategoriesMap = (categoriesMap) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
  action: categoriesMap,
});
