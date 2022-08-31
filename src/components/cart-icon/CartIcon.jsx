import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CartIcon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      className="cart-icon-container"
      onClick={toggleIsCartOpen}
      onMouseEnter={toggleIsCartOpen}
    >
      <ShoppingIcon className="shopping-cart-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
