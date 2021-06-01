import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Burger from 'hamburger-react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [isOpen, setOpen] = useState(true);
  const [linkVisible, setLinkVisible] = useState(true);
  //landOnPage is here to avoid having the close menu text animation on start
  const [landOnPage, setLandOnPage] = useState(true);

  const displayNav = () => {
    // if (!isOpen) {
    //   setTimeout(() => {
    //     if (landOnPage) setLandOnPage(false);
    //     setTextVisible(!textVisible);
    //   }, 50);
    // } else {
    //   if (landOnPage) setLandOnPage(false);
    //   setTextVisible(!textVisible);
    //   setTimeout(() => {
    //     setOpen(false);
    //   }, 1150);
    // }
  };

  const toggleNavbar = () => {
    if (isOpen) {
      setOpen(false);
      setTimeout(() => setLinkVisible(false), 500);
    } else {
      setOpen(true);

      setLinkVisible(true);
    }
  };

  const size = isMobile ? 30 : 48;
  return (
    <div className='header'>
      <nav
        className={`transition-all duration-500 ${
          isOpen ? 'w-screen' : 'w-1/12'
        }`}
      >
        <div className='burgerContainer'>
          <Burger
            class='burger'
            size={size}
            toggled={isOpen}
            toggle={() => toggleNavbar()}
          />
        </div>
        <ul
          className={`transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <li>
            <NavLink
              className={`menuText ${!isOpen ? 'cursor-default' : ''} ${
                useLocation().pathname === '/' ? 'textSelected' : 'textToHover'
              }`}
              exact
              to='/'
            >
              <span className='whitespace-nowrap'>A propos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`menuText ${!isOpen ? 'cursor-default' : ''} ${
                useLocation().pathname === '/projets'
                  ? 'textSelected'
                  : 'textToHover'
              }`}
              exact
              to='/projets'
            >
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`menuText ${!isOpen ? 'cursor-default' : ''}${
                useLocation().pathname === '/contact'
                  ? 'textSelected'
                  : 'textToHover'
              }`}
              exact
              to='/contact'
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
