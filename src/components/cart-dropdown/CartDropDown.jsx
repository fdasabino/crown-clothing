import React, { useContext } from "react";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartContext";
import "./CartDropDown.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button disabled> GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
