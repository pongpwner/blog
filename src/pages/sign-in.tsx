import React from "react";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <form action="/sign-in" method="POST">
        <label htmlFor="username">username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">password:</label>
        <input type="password" id="password" name="password" />
      </form>
    </div>
  );
};

export default SignInPage;
