import { FC, ButtonHTMLAttributes } from "react";
import "./Button.scss";

export enum ButtonTypes {
  base = "base",
}

export type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
  return (
    <button className={`button-container ${ButtonTypes}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
