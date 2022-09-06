import React, { useContext, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { logoutUser } from "../../utils/firebase";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { Outlet } from "react-router-dom";
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
  const ref = useRef();
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  // detect click events to remove cart dropdown
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isCartOpen && ref.current && !ref.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isCartOpen, setIsCartOpen]);

  return (
    <NavigationContainer ref={ref}>
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
