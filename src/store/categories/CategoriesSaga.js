import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./CategoriesAction";

import { CATEGORIES_ACTION_TYPES } from "./CategoriesTypes";

export function* fetchCategoriesAsync() {
  try {
    //call se usa para las funciones
    //yield funciona como await
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');

    //put es como dispatch
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
};

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])//todo se completa hasta que all() termine
}