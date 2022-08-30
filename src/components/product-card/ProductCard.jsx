import React from "react";
import "./ProductCard.scss";
import Button from "../button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="card-footer">
        <span className="card-name">{name}</span>
        <span className="card-price">$ {price}</span>
        <Button buttonType="inverted">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
