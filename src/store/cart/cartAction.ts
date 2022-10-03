import { CART_ACTION_TYPES, CartItem } from "./cartActionTypes";
import { CategoryItem } from "../categories/categoriesActionTypes";

import { createAction, withMatcher, Action, ActionWithPayload } from "../../reducer/reducerUtils";
import { toast } from "react-toastify";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  // if found increment qty
  if (existingCartItem) {
    toast.info(`"${productToAdd.name}" quantity updated.`);

    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : //if not found return a new item
          cartItem
    );
  }

  toast.success(`"${productToAdd.name}" added to cart.`);

  //return new array with modified cartItems/ new cart items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
  // find the cart item to remove
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cart items with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};
const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  toast.warning(`${cartItemToRemove.name} quantity updated.`);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItemToRemove);
  toast.warning(`${cartItemToRemove.name} removed from cart.`);
  return setCartItems(newCartItems);
};
