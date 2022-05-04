import React from "react";
import { Nav, NavContainer, Links } from "./style";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <Links>
          <Link to="/">back home </Link>
        </Links>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
