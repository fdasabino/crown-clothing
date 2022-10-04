import React from "react";
import { AiOutlineCrown, AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__logo">
        <Link to="/">
          Crown <AiOutlineCrown className="logo__icon" /> Clothing
        </Link>
      </div>
      <p>
        <AiOutlineCopyrightCircle /> 2022, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
