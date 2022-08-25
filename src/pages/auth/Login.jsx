import React from "react";
import "./Login.scss";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

const Login = () => {
  return (
    <>
      <h1 className="page-header">Login or Sign Up</h1>
      <div className="login-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Login;
