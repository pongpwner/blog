import React from "react";
import SignInForm from "../../components/signInForm/signInForm";
import { Link } from "react-router-dom";
interface signInProps {
  setJWT: Function;
}
const SignIn = ({ setJWT }: signInProps) => {
  return (
    <div className="sign-in-page">
      <Link to={"/dashboard"}>dashboard</Link>
      <SignInForm setJWT={setJWT}></SignInForm>
    </div>
  );
};

export default SignIn;
