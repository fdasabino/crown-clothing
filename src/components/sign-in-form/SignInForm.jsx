import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/userAction";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./SignInForm.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const loginWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      navigate("/");
      resetFormFields();
      toast.success(`You're now logged in as ${email}`);
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
    <div className="signin-form__container">
      <span>
        <h3>Login with your email and password</h3>
      </span>
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
        <div className="signin-form__buttons-container">
          <Button type="submit">Login</Button>
        </div>
      </form>
      <Button type="button" buttonType="google" onClick={() => loginWithGoogle()}>
        <div>
          Login with Google <FcGoogle size={18} />
        </div>
      </Button>
    </div>
  );
};

export default SignInForm;
