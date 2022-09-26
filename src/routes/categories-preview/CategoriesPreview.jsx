
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/CategoriesSelector";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import Spinner from "../../components/spinner/Spinner";


const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <>
      {
        isLoading
        ?
        <Spinner/>
        :
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return <CategoryPreview key={title} title={title} products={products}/>
        })
      }
    </>
  );
};

export default CategoriesPreview;
