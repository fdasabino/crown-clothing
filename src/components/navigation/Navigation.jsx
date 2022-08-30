import React, { useContext } from "react";
import { toast } from "react-toastify";
import { logoutUser } from "../../utils/firebase";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";

import "./Navigation.scss";
import CartDropDown from "../cart-dropdown/CartDropDown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div>
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>

          {!currentUser ? (
            <Link to="/auth" className="nav-link">
              Login
            </Link>
          ) : (
            <span
              className="nav-link"
              onClick={() => {
                logoutUser();
                toast.info("You have logged out successfully...");
              }}
            >
              Logout
            </span>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
