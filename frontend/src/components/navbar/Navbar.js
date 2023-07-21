import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#fff',
  }
};

export default Navbar;