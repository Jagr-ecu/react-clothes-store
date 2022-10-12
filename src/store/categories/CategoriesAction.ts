import { Action, ActionWithPayload, withMatcher } from '../../utils/reducer/Reducer';
import { CATEGORIES_ACTION_TYPES, Category } from './CategoriesTypes';

export type FetchCategoriesStart = 
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess =
  ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed =
  ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;


export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
}));

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
}));

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  payload: error,
}));

//usada en redux normal
// export const setCategories = (categoriesArray: Category[]) => ({
//   type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
//   payload: categoriesArray,
// });

//funcion reemplazada con fetchCategoriesAsync de CategoriesSaga
//usada en redux thunk
// export const fetchCategoriesAsync = () => async(dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try {
//     const categoriesArray = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch(error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// }

