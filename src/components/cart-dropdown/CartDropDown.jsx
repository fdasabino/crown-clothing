import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem";
import Button from "../../components/button/Button";
import "./CartDropDown.scss";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown__container">
      <div className="cart-dropdown__cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="cart-dropdown__empty-message">Your cart is empty</span>
        )}
      </div>
      <Button disabled={cartItems.length === 0} onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropDown;
