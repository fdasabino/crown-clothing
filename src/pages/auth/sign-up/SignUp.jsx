import React from "react";
import SignUpForm from "../../../components/sign-up-form/SignUpForm";
import { SignUpContainer } from "./SignUp.styles";

const SignUp = () => {
  return (
    <>
      <h2 className="page-header">Sign Up</h2>
      <SignUpContainer>
        <SignUpForm />
      </SignUpContainer>
    </>
  );
};

export default SignUp;
