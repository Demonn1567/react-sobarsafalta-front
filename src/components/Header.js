import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './Header.css';
import logo from './logo.jpeg';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';

const Header = () => {
  const isPresent = useIsPresent();
  const [showPrivacyScreen, setShowPrivacyScreen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (showPrivacyScreen) {
      setTimeout(() => setShowPrivacyScreen(false), 50); 
    }
  }, [showPrivacyScreen]);

  const handleSelect = (eventKey) => {
    navigate('/login', { state: { loginType: eventKey }, replace: true });
  };

  const handleNavigate = (path) => {
    navigate(path, { replace: true });
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="header-elements">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="about-button" onClick={() => handleNavigate('/about')}>About Us</button>
        <button className="report-button" onClick={() => handleNavigate('/report')}>Report Abuse</button>
        <button className="about-button" onClick={() => handleNavigate('/register')}>Register Organisation</button>
      </div>
      <button className="blogs-button" onClick={() => handleNavigate('/success-stories')}>Success Stories</button>
      <Dropdown onSelect={handleSelect} className="sign-in-dropdown">
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Sign In
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="Rehab Center">Rehab Center</Dropdown.Item>
          <Dropdown.Item eventKey="User">User</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <AnimatePresence>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: showPrivacyScreen ? 1 : 0, transition: { duration: 0.5, ease: 'circOut' } }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      </AnimatePresence>
    </header>
  );
};

export default Header;
