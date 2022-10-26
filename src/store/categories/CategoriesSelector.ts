//en los selectores es donde se hacen la logica de transformacion del dato  
//reselect para memoizar los selectores
import { createSelector } from "reselect"

import { CategoryMap } from './CategoriesTypes';
import { CategoriesState } from './CategoriesReducer';
import { RootState } from '../Store';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categoriesArray
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categoriesArray): CategoryMap => categoriesArray.reduce((acc, category) => {
        const { title, items } = category
        acc[title.toLowerCase()] = items
        return acc
    }, {} as CategoryMap)
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
