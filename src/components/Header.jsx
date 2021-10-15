import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Container>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Navbar.Brand href="#">ROS Robot Controller</Navbar.Brand>
          <Navbar.Toggle aria-controls="basis-navbar-nav" />
          <Navbar.Collapse id="basis-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
export default Header;
