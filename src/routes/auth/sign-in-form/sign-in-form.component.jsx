import { useState } from "react";
import {
  signInAuthUserWithEmailAndPasswrod,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../../../components/form-input/form-input.component";
import Button, {
  BUTTON_TYPES_CLASSES,
} from "../../../components/button/button.component";
import "./sign-in-for.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPasswrod(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("This email is not registered");
          break;
        default:
          break;
      }
      console.log(error);
    }
    return;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account?</h2>
      <span>Sign In with Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            value: email,
            name: "email",
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            value: password,
            name: "password",
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
