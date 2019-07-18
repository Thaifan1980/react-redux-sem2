import React from "react";

import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

// import NavbarCartComponent from "./CartComponent/CartComponent";

import "./NavBar.scss";
import NavbarCartContainer from "../../containers/NavbarCartContainer";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Container>
        <ul className="nav">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
          <li className="cart">
            <NavLink exact to="/cart">
              <NavbarCartContainer />
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
