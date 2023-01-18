import React from "react";
import LogoutButton from "../logout-button/logout-button.component";
import { Link } from "react-router-dom";
interface IHeaderProps {
  user: string | null;
  setUser: Function;
}
const Header = ({ user, setUser }: IHeaderProps) => {
  return (
    <header>
      {user ? <span>{user}</span> : null}
      {user ? (
        <LogoutButton setUser={setUser}></LogoutButton>
      ) : (
        <Link to="/">sign-in</Link>
      )}
    </header>
  );
};

export default Header;
