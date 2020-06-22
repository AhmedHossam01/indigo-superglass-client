import React from "react";
import "./navbar.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Icon from "@mdi/react";
import { mdiAccount, mdiCart, mdiMagnify } from "@mdi/js";

// TODO: make the navbar sticky or at least a cart that appears when scrolling down and fixed in the bottom

const AppNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="mr-0" href="/">
          <img src="images/logo.svg" className="navbar__logo" alt="indigo" />
        </Navbar.Brand>

        <Navbar.Toggle
          className="navbar__toggler"
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse>
          <Nav className="ml-auto nav">
            <a className="nav__link nav__link--active" href="/">
              Home
            </a>
            <a className="nav__link" href="/">
              Shop
            </a>
            <a className="nav__link" href="/">
              Contact
            </a>
            <a className="nav__link" href="/">
              About
            </a>
          </Nav>

          <Nav className="ml-auto nav__icons-container">
            <a className="nav__icon" href="/">
              <Icon path={mdiAccount} size={1} color="#272727" />
            </a>
            <a className="nav__icon" href="/">
              <Icon path={mdiCart} size={1} color="#272727" />
            </a>
            <a className="nav__icon" href="/">
              <Icon path={mdiMagnify} size={1} color="#272727" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
