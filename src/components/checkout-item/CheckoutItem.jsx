import React, { useContext } from "react";
import {
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { CartContext } from "../../contexts/CartContext";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow">
          <AiOutlineArrowLeft onClick={() => removeItemFromCart(cartItem)} />
        </span>
        {quantity}
        <span className="arrow">
          <AiOutlineArrowRight onClick={() => addItemToCart(cartItem)} />
        </span>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button">
        <AiOutlineClose onClick={clearItemHandler} />
      </div>
    </div>
  );
};

export default CheckoutItem;
