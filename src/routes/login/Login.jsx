import React from "react";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={logGoogleUser}>Login With Google PopUp</button>
      <SignUpForm />
    </div>
  );
};

export default Login;
