import React from "react";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase";

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={logGoogleUser}>Login With Google PopUp</button>
    </div>
  );
};

export default Login;
