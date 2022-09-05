import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartContext";
import "./CartDropDown.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <button
        className="cart-dropdown-button"
        disabled={cartItems.length === 0}
        onClick={goToCheckoutHandler}
      >
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default CartDropDown;
