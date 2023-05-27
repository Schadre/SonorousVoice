import { useState } from 'react';
import { Link } from 'react-router-dom';

// Label Icons for non Tech saavy

function Navbar() {
  return (
    <nav
      className="navbar bg-blue-900"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(13, 71, 161, 0.5)',
        color: 'rgb(144, 202, 249, 0.5)',
        padding: '1rem',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '60px',
        height: '100vh',
        transition: 'width 0.3s ease',
        zIndex: 100,
        boxShadow: '4px 7px 10px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="flex flex-col items-center space-y-20">
        <Link to="/">
          <i className="fa-solid fa-house fa-xl hover:text-blue-50" title='Home'></i>
        </Link>
        <Link to="/demos">
          <i className="fa-solid fa-play fa-xl hover:text-blue-50" title='Demos'></i>
        </Link>
        <Link to="/about">
          <i className="fa-solid fa-address-card fa-xl hover:text-blue-50" title='About'></i>
        </Link>
        <Link to="/contact">
          <i className="fa-solid fa-envelope fa-xl hover:text-blue-50" title='Contact Us'></i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
