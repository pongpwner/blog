import React from "react";
import SignInForm from "../../components/signInForm/signInForm";
import { Link } from "react-router-dom";

interface signInProps {
  setJWT: Function;
  setUser: Function;
}
const SignIn = ({ setJWT, setUser }: signInProps) => {
  return (
    <div className="sign-in-page">
      <SignInForm setJWT={setJWT} setUser={setUser}></SignInForm>
    </div>
  );
};

export default SignIn;
