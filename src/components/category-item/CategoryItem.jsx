import React from "react";
import { Link } from "react-router-dom";
import {
  CategoryContainer,
  BackgroundImage,
  Wrapper,
  CategoryItemContainer,
} from "./CategoryItem.styles";

const CategoryItem = ({ categories }) => {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryItemContainer key={category.id}>
          <BackgroundImage imageUrl={category.imageUrl} />
          <Wrapper>
            <Link to={`/shop/${category.title}`}>
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </Link>
          </Wrapper>
        </CategoryItemContainer>
      ))}
    </CategoryContainer>
  );
};

export default CategoryItem;
