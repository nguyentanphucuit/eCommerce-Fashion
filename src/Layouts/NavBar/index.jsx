import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Person, Cart, List } from 'react-bootstrap-icons';
NavBar.propTypes = {};

function NavBar(props) {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">NorthStar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', fontSize: '14px', fontWeight: 'bold' }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            <Nav.Link href="#action2">CONTACT US</Nav.Link>
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
  );
}

export default NavBar;
