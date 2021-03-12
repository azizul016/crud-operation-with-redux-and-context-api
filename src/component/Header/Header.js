import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar bg='primary' expand='lg'>
        <Navbar.Brand>
          <Link
            style={{ textDecoration: "none" }}
            className='text-white'
            to='/'
          >
            Curd Operation
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav.Link className='mr-auto'>
            <NavLink
              style={{ textDecoration: "none" }}
              className='text-white px-2'
              to='/home'
            >
              Home
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              className='text-white'
              to='/home'
            >
              Link
            </NavLink>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
