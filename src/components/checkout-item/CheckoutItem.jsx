import React, { useContext } from "react";
import {
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { CartContext } from "../../contexts/CartContext";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Value,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <AiOutlineArrowLeft onClick={() => removeItemFromCart(cartItem)} />
        <Value>{quantity}</Value>
        <AiOutlineArrowRight onClick={() => addItemToCart(cartItem)} />
      </Quantity>
      <BaseSpan> ${price}</BaseSpan>
      <AiOutlineClose onClick={clearItemHandler} />
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
