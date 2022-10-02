import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase";

import { CATEGORIES_ACTION_TYPES } from "./CategoriesTypes";

export const setCategories = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categoriesArray,
});

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFailed = (error) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  payload: error,
});

//funcion reemplazada con fetchCategoriesAsync de CategoriesSaga
//usada en redux thunk
export const fetchCategoriesAsync = () => async(dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch(error) {
    dispatch(fetchCategoriesFailed(error));
  }
}

