import React, { useContext, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { logoutUser } from "../../utils/firebase";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";
import "./Navigation.scss";

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
    <>
      <div className="navigation" ref={ref}>
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
