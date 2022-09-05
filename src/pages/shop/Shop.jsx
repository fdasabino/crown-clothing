import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import "./Shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
