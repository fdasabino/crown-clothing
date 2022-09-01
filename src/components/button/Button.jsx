import React from "react";
import "./Button.scss";

const ButtonTypes = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...buttonProps }) => {
  return (
    <button
      className={`button-container ${ButtonTypes[buttonType]}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
