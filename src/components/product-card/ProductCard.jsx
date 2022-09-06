import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import Button, { ButtonTypes } from "../button/Button";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={ButtonTypes.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
