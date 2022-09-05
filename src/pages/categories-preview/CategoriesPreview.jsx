import React, { useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import "./CategoriesPreview.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="categories-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
