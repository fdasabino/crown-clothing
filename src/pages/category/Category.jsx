import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/product-card/ProductCard";
import { CategoryContainer, Title } from "./Category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
