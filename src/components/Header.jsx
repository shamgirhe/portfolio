import React from 'react';
import { Navbar, Nav, Form, Col } from 'react-bootstrap';
import { useTheme } from './ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    
  };

  return (
    <Navbar bg={isDarkMode ? 'light' : 'dark'} variant={isDarkMode ? 'light' : 'dark'} style={containerStyle} expand="lg" sticky="top">
      <div>
      <Navbar.Brand as={Link} to="/" className="mr-auto">My Portfolio</Navbar.Brand>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between',gap:"20px" }} >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Group controlId="darkModeToggle" className="mr-3">
            <Form.Check 
            style={{ color: 'pink' }}
              type="switch" 
              id="custom-switch" 
              label={isDarkMode ? 'Dark Mode' : 'Light Mode'} 
              checked={isDarkMode}
              onChange={toggleTheme}
            />
          </Form.Group>
        </Form>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
