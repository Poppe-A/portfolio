import React, { useState, useEffect } from 'react';
import Burger from 'hamburger-react';
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

  return (
    <div className='header'>
      <nav className={isOpen ? 'show' : 'noShow'}>
        <div className='burgerContainer'>
          <Burger
            class='burger'
            size={48}
            toggled={isOpen}
            toggle={() => displayNav()}
          />
        </div>
        <ul
          className={`${
            landOnPage ? 'startState' : textVisible ? 'showText' : 'noShowText'
          }`}
        >
          <li>About</li>
          <li>Projets</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
