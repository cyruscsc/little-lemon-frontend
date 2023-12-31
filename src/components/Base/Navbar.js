import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  const [user, setUser] = useContext(UserContext);
  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className='navbar bg-white'>
      <div className='super-container flex-container navbar-container'>
        <Link to='/'><img src='./images/banner-yellow.png' alt='Little Lemon Logo' className='navbar-logo'/></Link>
        <a href='#' className='navbar-toggle' onClick={toggleNavbar}>
            <i className="fa-solid fa-bars"></i>
        </a>
        <ul className={`flex-container navbar-list ${isActive ? 'active' : 'inactive'}`}>
          <li><Link to='/' className='navbar-link' onClick={toggleNavbar}>HOME</Link></li>
          <li><Link to='/menu' className='navbar-link' onClick={toggleNavbar}>MENU</Link></li>
          <li><Link to='/booking' className='navbar-link' onClick={toggleNavbar}>RESERVATION</Link></li>
          {/* <li><Link to='#' className='navbar-link' onClick={toggleNavbar}>OUR STORY</Link></li> */}
          { !user.user_id && <li><Link to='/login' className='navbar-link' onClick={toggleNavbar}><i className="fa-solid fa-right-to-bracket" /></Link></li>}
          { user.user_id && <li><Link to='/logout' className='navbar-link' onClick={toggleNavbar}><i className="fa-solid fa-right-from-bracket" /></Link></li>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
