import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./Category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-page-container">
      <h2>{category.toUpperCase()}</h2>
      <div className="category-page-wrapper">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
