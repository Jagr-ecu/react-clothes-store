//en los selectores es donde se hacen la logica de transformacion del dato  
export const selectCategoriesMap = (state) => 
    state.categories.categoriesArray.reduce((acc, category) => {
        const { title, items } = category
        acc[title.toLowerCase()] = items
        return acc
    }, {})
