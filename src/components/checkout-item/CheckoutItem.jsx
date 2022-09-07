import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cartAction";
import { AiOutlineClose, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Value,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <AiOutlineArrowLeft className="icon_buttons" onClick={removeItemHandler} />
        <Value>{quantity}</Value>
        <AiOutlineArrowRight className="icon_buttons" onClick={addItemHandler} />
      </Quantity>
      <BaseSpan> ${price}</BaseSpan>
      <AiOutlineClose className="icon_buttons clear_item" onClick={clearItemHandler} />
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
