import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { fetchCategoriesStart } from "../../store/categories/CategoriesAction";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

import "./shop.scss";
import { useDispatch } from "react-redux";


const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())      
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
