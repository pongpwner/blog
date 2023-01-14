import React from "react";
import SignInForm from "../../components/signInForm/signInForm";
interface signInProps {
  setJWT: Function;
}
const SignIn = ({ setJWT }: signInProps) => {
  return (
    <div className="sign-in-page">
      <SignInForm setJWT={setJWT}></SignInForm>
    </div>
  );
};

export default SignIn;
