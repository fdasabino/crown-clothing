import React, { useState } from "react";
import {
  signInWithGooglePopUp,
  loginAuthUserWithEmailAndPassword,
} from "../../utils/firebase";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import FormInput from "../form-input/FormInput";
import Button, { ButtonTypes } from "../button/Button";
import { SignInContainer, ButtonsContainer } from "./SignInForm.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const loginWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      resetFormFields();
      // toast.success("You have been logged in successfully");
    } catch (error) {
      // switch to different case according to the error

      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Incorrect password for email address.");
          break;

        case "auth/user-not-found":
          toast.error("Incorrect username. Please Try again.");
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <SignInContainer className="sign-up-container">
      <h2>Already have an account?</h2>

      <span>Login with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleFormChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleFormChange}
          required
        />
        <ButtonsContainer className="buttons-container">
          <Button type="submit">Login</Button>
        </ButtonsContainer>
      </form>
      <Button
        type="button"
        buttonType={ButtonTypes.google}
        onClick={loginWithGoogle}
      >
        <div className="buttons-container">
          Login with Google <FcGoogle size={18} />
        </div>
      </Button>
    </SignInContainer>
  );
};

export default SignInForm;
