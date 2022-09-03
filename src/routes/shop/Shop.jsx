import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

import ProductCard from "../../components/product-card/ProductCard";
import { CategoriesContext } from "../../context/CategoriesContext";

import "./shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products}/>
      })}
    </div>
  );
};

export default Shop;
