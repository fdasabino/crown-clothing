import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cartSelector";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import "./Checkout.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout__container">
      <div className="checkout__header">
        <h2>Shopping Cart | Total: ${cartTotal}</h2>
      </div>
      <div className="checkout__card-container">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} id={cartItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
