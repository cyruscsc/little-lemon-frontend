import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  const [isActive, setIsActive] = useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className='navbar bg-white'>
      <div className='super-container flex-container navbar-container'>
        <Link to='/'><img src='./images/banner-yellow.png' alt='Little Lemon Logo' className='navbar-logo'/></Link>
        <a href='#' className='navbar-toggle' onClick={toggleNavbar}>
            <i class="fa-solid fa-bars"></i>
        </a>
        <ul className={`flex-container navbar-list ${isActive ? 'active' : 'inactive'}`}>
          <li><Link to='/' className='navbar-link'>HOME</Link></li>
          <li><Link to='#' className='navbar-link'>MENU</Link></li>
          <li><Link to='/booking' className='navbar-link'>RESERVATION</Link></li>
          <li><Link to='#' className='navbar-link'>OUR STORY</Link></li>
          <li><Link to='#' className='navbar-link'><i class="fa-solid fa-cart-shopping" /></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
