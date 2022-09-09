import "./Button.scss";

export const ButtonTypes = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${ButtonTypes[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
