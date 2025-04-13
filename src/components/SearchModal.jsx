import React from 'react';
import { IoClose, IoSearch } from "react-icons/io5";

const SearchModal = ({ isOpen, onClose }) => {
  return (
    <div className={`search-modal ${isOpen ? 'show' : ''}`}>
      <div className="search-container">
        <div className="search-header">
          <span>Search</span>
          <IoClose onClick={onClose} className="close-icon" />
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search..." />
          <IoSearch className="search-btn" />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;