import React from "react";
import SignUpForm from "../../../components/sign-up-form/SignUpForm";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <h2 className="page-header">Sign Up</h2>
      <div className="signup__container">
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
