import "./signInForm.scss";
import React, { useState } from "react";
const SignInForm = () => {
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
    console.log("yeaaaaaa");
    event.preventDefault();
    let response = await fetch("http://localhost:5000/sign-in", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });

    let data = await response.json();
    console.log(data);
    //save token to local storage
  }

  return (
    <form
      action="http://localhost:5000/sign-in"
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
