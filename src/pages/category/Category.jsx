import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoading, selectCategoriesMap } from "../../store/categories/categoriesSelector";
import Spinner from "../../components/spinner/Spinner";
import ProductCard from "../../components/product-card/ProductCard";
import "./Category.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category__container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="category__title">{category.toUpperCase()}</h2>
          <div className="category__wrapper">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
