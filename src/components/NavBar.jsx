import React, { useState } from "react";
import { NavLink as Starlink } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar color="dark" expand="md" dark>
      <NavbarBrand to="/" tag={Starlink}>
        <i className="fa-solid fa-map" style={{ color: "lightblue" }}>
          &nbsp; &nbsp;
        </i>
        Journal-X
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Starlink} to="/log">
              Trade Log
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Starlink} to="/charts">
              Trade Challenges
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Starlink} to="/cinterest">
              Compound Interest
            </NavLink>
          </NavItem>
        </Nav>

        {/* <Nav navbar>
          <NavItem>
            <NavLink to="/signup" tag={Starlink}>
              SIGNUP
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" tag={Starlink}>
              LOGIN
            </NavLink>
          </NavItem>
        </Nav> */}
      </Collapse>
    </Navbar>
  );
};
