//en los selectores es donde se hacen la logica de transformacion del dato  

//reselect para memoizar los selectores
import { createSelector } from "reselect"

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categoriesArray
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categoriesArray) => categoriesArray.reduce((acc, category) => {
        const { title, items } = category
        acc[title.toLowerCase()] = items
        return acc
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
