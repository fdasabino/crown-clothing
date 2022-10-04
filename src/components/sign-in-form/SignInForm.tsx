import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/userAction";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./SignInForm.scss";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      navigate("/");
      resetFormFields();
      toast.success(`You're now logged in as ${email}`);
    } catch (error) {
      // switch to different case according to the error
      if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD) {
        toast.error("Incorrect password for email address.");
      } else if ((error as AuthError).code === AuthErrorCodes.INVALID_EMAIL) {
        toast.error("Incorrect password for email address.");
      } else {
        return;
      }
    }
  };

  return (
    <div className="signin-form__container">
      <span>
        <h3>Login with your email and password</h3>
      </span>
      <form onSubmit={(e) => handleFormSubmit(e)}>
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
      <Button type="button" onClick={() => loginWithGoogle()}>
        <div>
          Login with Google <FcGoogle size={18} />
        </div>
      </Button>
    </div>
  );
};

export default SignInForm;
