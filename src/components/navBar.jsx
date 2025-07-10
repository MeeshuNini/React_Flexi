// components/NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import SearchBar from './searchBar';

const NavBar = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>BlogApp</Link>

        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>

        <div className={styles.desktopSearch}>
          <SearchBar onSearch={onSearch} />
        </div>

        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/blog" onClick={toggleMobileMenu}>Blog</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;