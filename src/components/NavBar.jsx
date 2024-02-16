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
    <Navbar color="dark" expand="md" dark className="px-5">
      <NavbarBrand to="/" tag={Starlink}>
        HOME
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Starlink} to="/log">
              TRADE LOG
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Starlink} to="/charts">
              TRADE CHART
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Starlink} to="/pnl">
              TRADE P&L
            </NavLink>
          </NavItem>
        </Nav>

        <Nav navbar>
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
        </Nav>
      </Collapse>
    </Navbar>
  );
};
