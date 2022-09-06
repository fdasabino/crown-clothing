import React from "react";
import { Link } from "react-router-dom";
import {
  CategoryContainer,
  BackgroundImage,
  Wrapper,
  CategoryItemContainer,
} from "./CategoryItem.styles";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const CategoryItem = () => {
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
