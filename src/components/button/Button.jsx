import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Button.styles";

export const ButtonTypes = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = ButtonTypes.base) =>
  ({
    [ButtonTypes.base]: BaseButton,
    [ButtonTypes.google]: GoogleSignInButton,
    [ButtonTypes.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...buttonProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...buttonProps}>{children}</CustomButton>;
};

export default Button;
