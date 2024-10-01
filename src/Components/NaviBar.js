import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";


export default function NaviBar() {
  return (
    <div>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        className="bg-dark fixed-top"
        style={{ opacity: 0.8 }}
      >
        <Container>
          <Navbar.Brand className="py-3" as={Link} to="/">E-ChargeZone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              <Nav.Link as={Link} to="/Policy" >Our Policy</Nav.Link>
              <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/SignIn">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
