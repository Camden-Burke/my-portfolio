import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '/logo.svg'; // Adjust the path as necessary

// Styles for all components
const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px',
    backgroundColor: '#000000',
    margin:'0px 80px' // Assuming a dark theme background
  },
  leftGroup: {
    display: 'flex',
    alignItems: 'center', // This ensures vertical alignment for the logo and title
  },
  rightGroup: {
    display: 'flex',
    alignItems: 'center', // This ensures vertical alignment for the nav links and button
  },
  navLink: {
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Roboto',
    lineHeight: '22px',
    textDecoration: 'none',
    margin: '0 10px', // Add margin for spacing between nav items
  },
  button: {
    cursor: 'pointer',
    width: '96px',
    height: '36px',
    padding: '0px 8px',
    border: '1px solid #ffffff',
    borderRadius: '2px',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: '18px',
    fontFamily: 'Roboto',
    lineHeight: '20px',
    outline: 'none',
  },
  imageContainer: {
    width: '33px',
    height: '33px',
    borderRadius: '8px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Roboto',
    fontWeight: 500,
    lineHeight: '22px',
    padding: '0 10px', // This will provide spacing if needed
  },
};

// Header component
const Header = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.header}>
      {/* Left Group: Logo and Title */}
      <div style={styles.leftGroup}>
        <NavLink to="/" style={{ ...styles.imageContainer, backgroundImage: `url(${logo})` }} />
        <NavLink to="/" style={styles.title}>
          CAMDEN BURKE
        </NavLink>
      </div>

      {/* Right Group: Navigation Links and Contact Button */}
      <div style={styles.rightGroup}>
        <NavLink to="/projects" style={styles.navLink}>
          All projects
        </NavLink>
        <NavLink to="/about" style={styles.navLink}>
          About me
        </NavLink>
        <button style={styles.button} onClick={() => navigate('/contact')}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
