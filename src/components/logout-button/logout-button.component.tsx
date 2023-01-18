import React from "react";
import { useNavigate } from "react-router";

interface ILogoutButtonProps {
  setUser: Function;
}
const LogoutButton = ({ setUser }: ILogoutButtonProps) => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("jwt");
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
