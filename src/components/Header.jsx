import React, { useState } from 'react';
import { Button, Container, Dropdown, Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/styles/Header.scss';
// Nếu có i18n thì import
// import { useTranslation } from 'react-i18next';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const isLoggedIn = true;
  // const { t } = useTranslation();

  const isActive = (path) => currentPath === path;

  const handleCartClick = () => {
    navigate('/cart');
  };

  const logout = () => {
    navigate('/login');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  const changeLanguage = (lang) => {
    console.log("Change language to:", lang);
  };

  return (
    <div id="header">
      <Navbar expand="lg" variant="light" className="fixed-top shadow-sm py-3">
        <Container>
          <img
            src="https://commercial.static.antoree.com/assets/images/logo_withtagline.svg"
            alt="Logo"
            style={{ height: 40 }}
            className='px-5'
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="me-auto d-flex flex-row">
              <Nav.Link as={Link} to="/" className={`nav-item-custom ${isActive('/') ? 'active' : ''}`}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className={`nav-item-custom ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={`nav-item-custom ${isActive('/about') ? 'active' : ''}`}>
                About
              </Nav.Link>
            </Nav>


            <div className="d-flex align-items-center gap-3">

              {/* Search */}
              <div className="search-box d-flex align-items-center gap-2">
                <InputGroup className="d-none d-lg-flex search-input-group">
                  <Form.Control className="text-dark" placeholder="Search..." />
                </InputGroup>
                <Button variant="outline-dark" onClick={() => setShowSearch(!showSearch)}>
                  <SearchIcon />
                </Button>
              </div>

              {/* User Dropdown */}
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-light"
                  id="dropdown-basic"
                  className="btn-menu-dropdown d-flex align-items-center"
                >
                  <AccountCircleIcon />
                  <MenuIcon />
                </Dropdown.Toggle>
                {isLoggedIn ? (
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                ) : (
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/login">
                      <LoginIcon className="me-2" /> Login
                    </Dropdown.Item>
                  </Dropdown.Menu>
                )}
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
