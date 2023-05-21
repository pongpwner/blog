import React from "react";
import LogoutButton from "../logout-button/logout-button.component";
import { Link } from "react-router-dom";
import styled from "styled-components";
interface IHeaderProps {
  user: string | null;
  setUser: Function;
  setJWT: Function;
  setPosts: Function;
}
const HeaderContainer = styled.header`
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-size: 2.5rem;
  margin: 2rem 0;
  a {
    color: #f7f7f7;
  }
`;
const Header = ({ user, setUser, setJWT, setPosts }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <Link to="/create-post">Create a New Post</Link>
      <Link to="/dashboard">dashboard</Link>
      {user ? <span>{user}</span> : null}
      {user ? (
        <LogoutButton
          setUser={setUser}
          setJWT={setJWT}
          setPosts={setPosts}
        ></LogoutButton>
      ) : (
        <Link to="/">sign-in</Link>
      )}
    </HeaderContainer>
  );
};

export default Header;
