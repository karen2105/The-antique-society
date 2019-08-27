import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <div className="antiques-navbar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">THE ANTIQUE SOCIETY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link eventKey="menu-news" href="#home"> NEWS </Nav.Link>
            <Nav.Link eventKey={2} href="#home"> EVENTS </Nav.Link>
            <Nav.Link eventKey={2} href="#home"> JOURNALS </Nav.Link>
            <Nav.Link eventKey={2} href="#home"> NEWSLETTERS </Nav.Link>
            <Nav.Link eventKey={2} href="#home"> RESEARCH </Nav.Link>
            <Nav.Link eventKey={2} href="#home"> GRANTS </Nav.Link>
            <Nav.Link eventKey={2} href="#home"> DONATIONS </Nav.Link>
            <Nav.Link eventKey={2} href="#home"> ABOUT US </Nav.Link>
            <Nav.Link eventKey={2} href="#home"> MEMBERSHIPS </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
}

export default NavbarComp;