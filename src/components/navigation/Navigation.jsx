import React, { useContext } from "react";
import { toast } from "react-toastify";
import { logoutUser } from "../../utils/firebase";
import { UserContext } from "../../contexts/UserContext";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
