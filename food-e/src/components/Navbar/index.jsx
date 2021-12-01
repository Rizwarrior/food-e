import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import Fade from "react-reveal/Fade";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>FoodE</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Plan-1
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Plan-2
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
