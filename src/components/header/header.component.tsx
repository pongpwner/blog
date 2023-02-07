import React from "react";
import LogoutButton from "../logout-button/logout-button.component";
import { Link } from "react-router-dom";
import styled from "styled-components";
interface IHeaderProps {
  user: string | null;
  setUser: Function;
  setJWT: Function;
}
const HeaderContainer = styled.header`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
const Header = ({ user, setUser, setJWT }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <Link to="/create-post">Create a New Post</Link>
      <Link to="/dashboard">dashboard</Link>
      {user ? <span>{user}</span> : null}
      {user ? (
        <LogoutButton setUser={setUser} setJWT={setJWT}></LogoutButton>
      ) : (
        <Link to="/">sign-in</Link>
      )}
    </HeaderContainer>
  );
};

export default Header;
