import React from "react";
import SignInForm from "../../../components/sign-in-form/SignInForm";

import "./Login.scss";

const Login = () => {
  return (
    <>
      <h2 className="page-header">Login</h2>
      <div className="login__container">
        <SignInForm />
      </div>
    </>
  );
};

export default Login;
