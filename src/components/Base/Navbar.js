import React from 'react'
import './Navbar.css'

const navLogoPath = './images/banner-yellow.png'

const Navbar = props => {
  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className='navbar'>
      <div className='super-container flex-container navbar-container'>
        <a href='/'><img src={navLogoPath} alt='Little Lemon Logo' className='navbar-logo'/></a>
        <a href='#' className='navbar-toggle' onClick={toggleNavbar}>
            <i class="fa-solid fa-bars"></i>
        </a>
        <ul className={`flex-container navbar-list ${isActive ? 'active' : 'inactive'}`}>
          <li><a href='/'>HOME</a></li>
          <li><a href='#'>MENU</a></li>
          <li><a href='/booking'>RESERVATION</a></li>
          <li><a href='#'>OUR STORY</a></li>
          <li><a href='#'><i class="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
