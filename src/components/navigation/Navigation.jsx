import React from "react";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../../utils/firebase";
import { selectCurrentUser } from "../../store/user/userSelector";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./Navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <NavigationContainer>
      <LogoContainer to="/">
        <CrownLogo />
      </LogoContainer>
      <NavLinksContainer>
        <NavLink to="/shop">Shop</NavLink>

        {!currentUser ? (
          <NavLink to="/auth">Login</NavLink>
        ) : (
          <NavLink
            as="span"
            onClick={() => {
              logoutUser();
              toast.info("You have logged out successfully...");
            }}
          >
            Logout
          </NavLink>
        )}

        <CartIcon />
      </NavLinksContainer>
      {isCartOpen && <CartDropDown />}
      <Outlet />
    </NavigationContainer>
  );
};

export default Navigation;
