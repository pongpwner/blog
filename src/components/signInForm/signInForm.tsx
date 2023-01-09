import "./signInForm.scss";

const SignInForm = () => {
  return (
    <form action="/sign-in" className="sign-in-form" method="POST">
      <label htmlFor="username">username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">password:</label>
      <input type="password" id="password" name="password" />
    </form>
  );
};
export default SignInForm;
