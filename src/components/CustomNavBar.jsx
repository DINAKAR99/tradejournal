import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
export const CustomNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        sessionStorage.removeItem("usermail");
        toast.success("Signed out successfully");
        // navigate("/");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
        console.log("Signed out successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    const user = sessionStorage.getItem("usermail");
    setUser(user);
  });

  return (
    <Navbar
      className=" custom-navbar  accordion    "
      expand="md"
      dark
      fixed="top"
    >
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
          <NavItem>
            <NavLink tag={Starlink} to="/rules">
              Rules
            </NavLink>
          </NavItem>
        </Nav>

        <Nav navbar className="ms-auto   ">
          <NavItem>
            <NavLink style={{ cursor: "pointer" }}>{user}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
