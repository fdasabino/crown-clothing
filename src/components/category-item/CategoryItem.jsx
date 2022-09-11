import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.scss";
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
    <div>
      <div className="category-item__wrapper">
        {categories.map((category) => (
          <Link key={category.id} to={`/shop/${category.title}`}>
            <div className="category-item__card card">
              <div className="category-item__card-img">
                <img src={category.imageUrl} alt={category.title} />
              </div>
              <div className="category-item__card-links">
                <h2>{category.title}</h2>
                <p>Shop Now</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
