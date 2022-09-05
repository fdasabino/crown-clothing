import React from "react";
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
            <h2>{category.title}</h2>
            <p>Shop</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
