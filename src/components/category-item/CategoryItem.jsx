import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { categories } from "../../data";
import "./CategoryItem.scss";

const CategoryItem = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div key={category.id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          />
          <div className="category-body-container" key={category.id}>
            <Link to={`/shop/${category.title}`}>
              <Button buttonType="inverted">{category.title}</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
