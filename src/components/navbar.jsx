//mport React, { Component } from "react";
import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Logo from "../img/logo.png";

/*
// className COMPONENT
// Pouziti, kdyz je state{}
className NavBar extends Component {
  render() {
    return (
      <nav classNameName="navbar navbar-light bg-light">
        <a href="#" classNameName="navbar-brand">
          Home{" "}
          <span classNameName="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
*/

// STATELESS FUNCTIONAL COMPONENT
// Pouziti v pripade, ze neni state{}
// nelze pouzit this !!!
// props jako argument v arrow function !!!
const NavBar = (props) => {
  console.log("NavBar - rendered");
  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="/">
        <Image
          src={Logo}
          width="50"
          height="25"
          className="d-inline-block align-middle"
          alt={"logo"}
        />{" "}
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/counters">
            Counter{" "}
            {props.totalCounters !== 0 ? (
              <span className="badge badge-pill badge-secondary">
                (total: {props.totalCounters})
              </span>
            ) : (
              <span></span>
            )}
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
