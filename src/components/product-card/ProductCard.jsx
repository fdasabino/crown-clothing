import React, { useContext } from "react";
import Button from "../button/Button";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="card-footer">
        <span className="card-name">{name}</span>
        <span className="card-price">$ {price}</span>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
