import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <div className="antiques-navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
        <Navbar.Brand className="d-none d-md-block" href="#home">THE ANTIQUE SOCIETY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link eventKey="menu-news" href="#home"> NEWS </Nav.Link>
            <Nav.Link eventKey="menu-events" href="#home"> EVENTS </Nav.Link>
            <Nav.Link eventKey="menu-journals" href="#home"> JOURNALS </Nav.Link>
            <Nav.Link eventKey="menu-newsletters" href="#home"> NEWSLETTERS </Nav.Link>
            <Nav.Link eventKey="menu-research" href="#home"> RESEARCH </Nav.Link>
            <Nav.Link eventKey="menu-grants" href="#home"> GRANTS </Nav.Link>
            <Nav.Link eventKey="menu-donations" href="#home"> DONATIONS </Nav.Link>
            <Nav.Link eventKey="menu-about" href="#home"> ABOUT US </Nav.Link>
            <Nav.Link eventKey="menu-memberships" href="#home"> MEMBERSHIPS </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
}

export default NavbarComp;