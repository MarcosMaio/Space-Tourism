import '../styles/navbar.scss';
import useWindowWidth from '../hooks/useWindowWidth';
import NavLink from './NavLink';
import { useState } from 'react';

import logoSrc from '../static/logo.svg';
import closeIconSrc from '../static/close-icon.svg';
import menuIconSrc from '../static/menu-icon.svg';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const windowWidth = useWindowWidth();
  const mobileWidth = 480;

  const menuIcon = (
    <img
      src={menuIconSrc}
      alt="close"
      className="menu-icon"
      onClick={toggleMenu}
    />
  );

  const closeIcon = (
    <img
      src={closeIconSrc}
      alt="close"
      className="close-menu-icon"
      onClick={toggleMenu}
    />
  );

  const navlinks = (
    <div className="navbar">
      {windowWidth < mobileWidth ? closeIcon : ''}
      <NavLink number="00" name="Home" to="/" />
      <NavLink number="01" name="Destination" to="/destinations" />
      <NavLink number="02" name="Crew" to="/crew" />
      <NavLink number="03" name="Technology" to="/technologies" />
    </div>
  );

  function toggleMenu() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  return (
    <nav>
      <div className="logo">
        <img
          src={logoSrc}
          alt="logo" />
      </div>
      <div className="line"></div>
      {windowWidth > mobileWidth ? navlinks : showMenu ? navlinks : menuIcon}
    </nav>
  );
}
