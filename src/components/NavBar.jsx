import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { NavLink as Starlink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { auth } from "../firebase";
import toast from "react-hot-toast";
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        sessionStorage.removeItem("usermail");
        toast.success("Signed out successfully");
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Navbar expand="md" dark className="main-navbar " fixed="top">
      <NavbarBrand to="/" tag={Starlink}>
        <i className="fa-solid fa-map" style={{ color: "lightblue" }}>
          &nbsp; &nbsp;
        </i>
        Journal-X
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        {/* <Nav className="me-auto" navbar>
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
          <NavItem>
            <NavLink tag={Starlink} to="/rules">
              Rules
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </NavItem>
        </Nav> */}

        <Nav navbar className="ms-auto ">
          <NavItem>
            <NavLink to="/signup" tag={Starlink}>
              Signup
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" tag={Starlink}>
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
