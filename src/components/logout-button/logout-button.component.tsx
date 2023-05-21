import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
interface ILogoutButtonProps {
  setUser: Function;
  setJWT: Function;
  setPosts: Function;
}
const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 2rem;
`;

const LogoutButton = ({ setUser, setJWT, setPosts }: ILogoutButtonProps) => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("jwt");
    setJWT("");
    setUser(null);
    setPosts(null);
    navigate("/");
  }

  return (
    <Button type="button" onClick={logout}>
      log out
    </Button>
  );
};

export default LogoutButton;
