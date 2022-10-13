import { AnyAction } from 'redux';

import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './CategoriesAction';
import { Category } from "./CategoriesTypes";

export type CategoriesState = {
    readonly categoriesArray: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

//como es asincrono se agrega si esta cargando y el error
export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {
    if(fetchCategoriesStart.match(action)){
        return { ...state, isLoading: true };
    }
    if(fetchCategoriesSuccess.match(action)){
        return { ...state, categoriesArray: action.payload, isLoading: false };
    }
    if(fetchCategoriesFailed.match(action)){
        return { ...state, error: action.payload, isLoading: false };
    }

    return state;
//switch case usado antes de implementar en typescript
//   switch (action.type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return { ...state, isLoading: true };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, categoriesArray: action.payload, isLoading: false };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//       return { ...state, error: action.payload, isLoading: false };
//     default:
//       return state;
//  }
};
