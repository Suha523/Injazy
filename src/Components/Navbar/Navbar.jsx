import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
} from "reactstrap";
import './Navbar.css'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className='pl-5 pr-5 position-absolute fixed-top' light expand='lg'>
      <NavbarBrand href='/' className='me-auto'>
        Injazy
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <Link className='link' to='/login'>
              Login
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
