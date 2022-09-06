import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartContext";
import Button from "../../components/button/Button";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropDown.styles";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button disabled={cartItems.length === 0} onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
