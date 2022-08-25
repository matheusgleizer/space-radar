import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Container, NavLinks, NavLink } from "./nav-bar.style";
import Logo from "../logo/logo.component";

const NavBar = () => {
  return (
    <Fragment>
      <Container>
        <Logo />
        <NavLinks>
          <NavLink to="missions">Missions</NavLink>
          <NavLink to="rockets">Rockets</NavLink>
        </NavLinks>
      </Container>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
