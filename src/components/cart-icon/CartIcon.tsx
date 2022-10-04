import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartAction";
import "./CartIcon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon__container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="cart-icon__shopping-icon" />
      <span className="cart-icon__item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
