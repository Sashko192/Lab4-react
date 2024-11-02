import React from 'react';
import { Link } from 'react-router-dom';
import './TodoContainer.css';

const Header = () => {
  return (
    <nav class="Colora">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/news">News</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Header;
