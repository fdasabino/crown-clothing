import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cartAction";
import { AiOutlineClose, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item__container">
      <div className="checkout-item__img-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="checkout-item__info-container">
        <span className="checkout-item__name"> {name} </span>
        <span className="checkout-item__price"> ${price}</span>
      </div>

      <div className="checkout-item__quantity-container">
        <div className="checkout-item__quantity-arrows">
          <AiOutlineArrowLeft className="icon_buttons" onClick={removeItemHandler} />
          <span className="checkout-item__quantity">{quantity}</span>
          <AiOutlineArrowRight className="icon_buttons" onClick={addItemHandler} />
        </div>
        <AiOutlineClose className="icon_buttons clear_item" onClick={clearItemHandler} />
      </div>
    </div>
  );
};

export default CheckoutItem;
