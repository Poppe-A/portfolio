import React from 'react';
import htmlImg from '../../assets/images/html.png';
import cssImg from '../../assets/images/css.png';
import jsImg from '../../assets/images/js.png';
import reactImg from '../../assets/images/react.png';
import nodeImg from '../../assets/images/node.png';
import gitImg from '../../assets/images/git.png';
import sqlImg from '../../assets/images/mySql.png';
import firebaseImg from '../../assets/images/firebase.png';
import tailwindImg from '../../assets/images/tailwind.png';
import { isMobile } from 'react-device-detect';

const Stack = () => {
  return (
    <div className='w-full h-3/5 px-4 md:px-32 text-center flex flex-col justify-between'>
      <ul className='w-full h-2/5 flex justify-between items-center flex-wrap'>
        <li className={isMobile ? '' : ''}>
          <img
            src={htmlImg}
            alt={htmlImg}
            className='h-12 md:h-24 transition duration-300 transform hover:scale-125'
          />
        </li>
        <li>
          <img
            src={cssImg}
            alt={cssImg}
            className='h-12 md:h-24 transition duration-300 transform hover:scale-125'
          />
        </li>
        <li>
          <img
            src={jsImg}
            alt={jsImg}
            className='h-14 md:h-24 transition duration-300 transform hover:scale-125'
          />
        </li>
        <li>
          <img
            src={gitImg}
            alt={gitImg}
            className='h-8 md:h-12 transition duration-300 transform hover:scale-125 '
          />
        </li>
        <li>
          <img
            src={reactImg}
            alt={reactImg}
            className='h-12 md:h-24 transition duration-300 transform hover:scale-125'
          />
        </li>
        <li>
          <img
            src={nodeImg}
            alt={nodeImg}
            className='h-12 md:h-24  transition duration-300 transform hover:scale-125'
          />
        </li>
      </ul>
      {/* <span className='text-2xl'>- J'ai des notions sur -</span> */}
      <ul className='w-full h-2/5 flex justify-evenly items-center flex-wrap'>
        <li>
          <img
            src={sqlImg}
            alt={sqlImg}
            className='h-12 md:h-12 transition duration-300 transform hover:scale-125'
          />
        </li>
        <li>
          <img
            src={firebaseImg}
            alt={firebaseImg}
            className='h-8 md:h-10 transition duration-300 transform hover:scale-125'
          />
        </li>
        <li>
          <img
            src={tailwindImg}
            alt={tailwindImg}
            className='h-8 md:h-10 transition duration-300 transform hover:scale-125'
          />
        </li>
      </ul>
    </div>
  );
};

export default Stack;
