import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import "./CategoryPreview.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview__container ">
      <span className="category-preview__title-container">
        <h2>
          <Link className="category-preview__title" to={title}>
            {title.toUpperCase()}
          </Link>
        </h2>
      </span>
      <div className="category-preview__card-layout">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
