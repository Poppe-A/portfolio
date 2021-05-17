import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Me from './MeMyselfAndI';
import Timeline from './Timeline';
import Stack from './Stack';

const About = () => {
  const [textNumber, setTextNumber] = useState(null);

  function textToRender() {
    switch (textNumber) {
      case 0:
        return <Me />;
      case 1:
        return <Timeline />;
      case 2:
        return <Stack />;
      default:
        return <div className='text-6xl'>Welcome to my Portfolio !</div>;
    }
  }

  return (
    <div className='text-white flex flex-col items-center justify-between flex-grow mt-14'>
      <div
        id='aboutHeader'
        className='flex justify-between w-full box-border px-0 lg:px-20 2xl:px-56'
      >
        <div className='aboutMenu'>
          <ul className='flex flex-col justify-between items-center text-2xl h-full'>
            <li>
              <span
                className={textNumber === 0 ? 'textSelected' : 'textToHover'}
                onClick={() => {
                  setTextNumber(0);
                }}
              >
                About me
              </span>
            </li>
            <li>
              <span
                className={textNumber === 1 ? 'textSelected' : 'textToHover'}
                onClick={() => {
                  setTextNumber(1);
                }}
              >
                Studies and experiences
              </span>
            </li>
            <li>
              <span
                className={textNumber === 2 ? 'textSelected' : 'textToHover'}
                onClick={() => {
                  setTextNumber(2);
                }}
              >
                The stack I use
              </span>
            </li>
          </ul>
        </div>
        <div className='titleContainer w-2/6'>
          <h1 className='text-4xl border-4 border-red-700 text-justify p-6 text'>
            Hi ! I'm <span className='text-red-700'>A</span>ntoine and I'm a Web
            developper
          </h1>
        </div>
      </div>
      {/* <div
        id='separator'
        className='w-5/12 mt-16 border-t-2 border-gray-500'
      ></div> */}

      <div className='aboutInfosContainer w-full flex justify-center items-center flex-grow'>
        {textToRender()}
      </div>
    </div>
  );
};

export default About;
