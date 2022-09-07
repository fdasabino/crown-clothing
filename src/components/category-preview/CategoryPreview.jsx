import React from "react";
import ProductCard from "../product-card/ProductCard";
import { CategoryPreviewContainer, Title, Preview } from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <span>
        <Title to={title}>{title.toUpperCase()}</Title>
      </span>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
