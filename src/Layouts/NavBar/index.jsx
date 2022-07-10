import React from "react";
import PropTypes from "prop-types";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Person, Cart, List } from "react-bootstrap-icons";
import { Link, Outlet } from "react-router-dom";

NavBar.propTypes = {};

function NavBar(props) {
  return (
    <div className="NavBar">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            NorthStar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto"
              style={{
                maxHeight: "100px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"} href="#action1">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"} href="#action2">
                ABOUT
              </Nav.Link>
              <Nav.Link href="#action3">CONTACT US</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Person></Person>
              </Nav.Link>
              <Nav.Link href="#memes">
                <Cart></Cart>
              </Nav.Link>
              <Nav.Link href="#memes">
                <List></List>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default NavBar;
