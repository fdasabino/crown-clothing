import React from "react";
import Button from "../button/Button";
import "./CartDropDown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropDown;
