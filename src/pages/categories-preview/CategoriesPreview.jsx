import React from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesLoading,
} from "../../store/categories/categoriesSelector";
import Spinner from "../../components/spinner/Spinner";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesLoading);

  return (
    <div className="category-preview__container">
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products} />;
          })
        )}
      </>
    </div>
  );
};

export default CategoriesPreview;
