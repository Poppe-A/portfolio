import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Me from './MeMyselfAndI';
import Timeline from './Timeline';
import Stack from './Stack';
import { CSSTransition } from 'react-transition-group';
import Axios from 'axios';
var fileDownload = require('js-file-download');

const About = () => {
  const [textNumber, setTextNumber] = useState(null);
  const [inProp, setInProp] = useState(false);

  function textToRender() {
    switch (textNumber) {
      case 0:
        return (
          <CSSTransition in={inProp} timeout={500} classNames='my-node'>
            <Me />
          </CSSTransition>
        );
      case 1:
        return (
          <CSSTransition in={inProp} timeout={500} classNames='my-node'>
            <Timeline />
          </CSSTransition>
        );
      case 2:
        return (
          <CSSTransition in={inProp} timeout={500} classNames='my-node'>
            <Stack />
          </CSSTransition>
        );
      default:
        return (
          <CSSTransition in={inProp} timeout={500} classNames='my-node'>
            <div className='text-center px-4 text-3xl md:text-6xl'>
              Bienvenue sur mon <span className='text-testColor'>P</span>
              ortfolio !
            </div>
          </CSSTransition>
        );
    }
  }

  const clickOnMenu = (number) => {
    setInProp(false);
    setTimeout(() => {
      setTextNumber(number);
      setInProp(true);
    }, 200);
  };

  const handleDownload = () => {
    Axios.get('http://146.59.158.219:9000', {
      responseType: 'blob',
    }).then((res) => {
      fileDownload(res.data, 'Poppe_CV.pdf');
    });
  };

  return (
    <div className='text-white flex flex-col items-center justify-between flex-grow mt-8 md:mt-14'>
      <div
        id='aboutHeader'
        className='flex flex-col md:flex-row justify-between w-full box-border px-4 lg:px-20 2xl:px-56'
      >
        <div className='aboutMenu'>
          <ul className='flex flex-col justify-between items-center text-base md:text-2xl h-full'>
            <li className='mb-2 md:mb-0'>
              <span
                className={textNumber === 0 ? 'textSelected' : 'textToHover'}
                onClick={() => {
                  clickOnMenu(0);
                }}
              >
                À propos de moi
              </span>
            </li>
            <li className='mb-2 md:mt-0'>
              <span
                className={textNumber === 1 ? 'textSelected' : 'textToHover'}
                onClick={() => {
                  clickOnMenu(1);
                }}
              >
                Études et expériences
              </span>
            </li>
            <li className='mb-2 md:mt-0'>
              <span
                className={textNumber === 2 ? 'textSelected' : 'textToHover'}
                onClick={() => {
                  clickOnMenu(2);
                }}
              >
                Ma stack favorite
              </span>
            </li>
          </ul>
        </div>
        <div className='titleContainer flex flex-col md:w-2/6 order-first md:order-last'>
          <h1 className='text-xl md:text-4xl border-testColor border-2 md:border-4 text-center p-3 md:p-6 mb-4 md:mt-0 text'>
            Je suis <span className='text-testColor-light'>A</span>ntoine,
            développeur Web
          </h1>
          <span className='text-center underline' onClick={handleDownload}>
            Télécharger mon CV
          </span>
        </div>
      </div>

      <div className='aboutInfosContainer w-full flex justify-center items-center flex-grow'>
        {textToRender()}
      </div>
    </div>
  );
};

export default About;
