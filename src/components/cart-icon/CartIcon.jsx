import React, { useRef, useEffect } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartAction";
import "./CartIcon.scss";

const CartIcon = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isCartOpen && ref.current && !ref.current.contains(e.target)) {
        dispatch(setIsCartOpen(!isCartOpen));
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isCartOpen, dispatch]);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon__container" ref={ref} onClick={toggleIsCartOpen}>
      <ShoppingIcon className="cart-icon__shopping-icon" />
      <span className="cart-icon__item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
