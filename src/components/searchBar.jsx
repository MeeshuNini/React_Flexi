// components/SearchBar.jsx
import React, { useState, useEffect } from 'react';
import styles from './searchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(query);
    }, 300); // Debounced search

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search blog posts"
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
