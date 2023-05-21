import "./signInForm.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { origin } from "../../App";
import styled from "styled-components";
interface signInFormProps {
  setJWT: Function;
  setUser: Function;
}

const SignInForm = ({ setJWT, setUser }: signInFormProps) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }
  async function postSignInInfo(event: React.SyntheticEvent): Promise<any> {
    event.preventDefault();
    let response = await fetch(`${origin}/sign-in`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });

    let data = await response.json();

    setJWT(data.token);

    if (data.token) {
      setUser(data.user.username);
      navigate("/dashboard");
    }
  }

  return (
    <form
      action={`${origin}/sign-in`}
      className="sign-in-form"
      method="POST"
      onSubmit={postSignInInfo}
    >
      <label htmlFor="username">username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="password">password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">sign in</button>
    </form>
  );
};
export default SignInForm;
