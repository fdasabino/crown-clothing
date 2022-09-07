import React from "react";
import SignInForm from "../../../components/sign-in-form/SignInForm";
import { LoginContainer } from "./Login.styles";

const Login = () => {
  return (
    <>
      <h2 className="page-header">Login</h2>
      <LoginContainer className="login-container">
        <SignInForm />
      </LoginContainer>
    </>
  );
};

export default Login;
