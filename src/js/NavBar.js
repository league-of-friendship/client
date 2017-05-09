import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <span className="icon"><i className="fa fa-home"></i></span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Season 1" id="season-dropdown">
              <MenuItem eventKey={1.1}>Standings</MenuItem>
              <MenuItem eventKey={1.2}>Schedule</MenuItem>
              <MenuItem eventKey={1.3}>Teams</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem>Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;