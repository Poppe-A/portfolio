import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Burger from 'hamburger-react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  //landOnPage is here to avoid having the close menu text animation on start
  const [landOnPage, setLandOnPage] = useState(true);

  const displayNav = () => {
    if (!isOpen) {
      setOpen(!isOpen);
      setTimeout(() => {
        if (landOnPage) setLandOnPage(false);
        setTextVisible(!textVisible);
      }, 50);
    } else {
      setTextVisible(!textVisible);
      setTimeout(() => {
        setOpen(!isOpen);
      }, 50);
    }
  };

  console.log('isMobile', isMobile);
  const size = isMobile ? 30 : 48;
  return (
    <div className='header'>
      <nav className={isOpen ? 'show' : 'noShow'}>
        <div className='burgerContainer'>
          <Burger
            class='burger'
            size={size}
            toggled={isOpen}
            toggle={() => displayNav()}
          />
        </div>
        <ul
          className={`${
            landOnPage ? 'startState' : textVisible ? 'showText' : 'noShowText'
          }`}
        >
          <li>
            <NavLink
              className={`menuText ${
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
              className={`menuText ${
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
              className={`menuText ${
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
