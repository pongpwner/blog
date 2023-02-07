import React from "react";
import { useNavigate } from "react-router";

interface ILogoutButtonProps {
  setUser: Function;
  setJWT: Function;
}
const LogoutButton = ({ setUser, setJWT }: ILogoutButtonProps) => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("jwt");
    setJWT("");
    setUser(null);
    navigate("/");
  }

  return (
    <button type="button" onClick={logout}>
      log out
    </button>
  );
};

export default LogoutButton;
