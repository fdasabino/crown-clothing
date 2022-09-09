import "./CartItem.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item__container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="cart-item__item-details">
        <span className="cart-item__name">{name}</span>
        <span className="cart-item__price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
