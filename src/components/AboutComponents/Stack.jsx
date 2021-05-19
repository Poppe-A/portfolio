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

const Stack = () => {
  return (
    <div className='w-full h-4/5 px-8 md:px-36 text-center flex flex-col justify-evenly'>
      {/* <span className='text-3xl'> - Je travaille avec - </span> */}
      <ul className='w-full flex justify-between items-center flex-wrap	h-1/2 mb-10'>
        <li>
          <img src={htmlImg} alt={htmlImg} className='h-12 md:h-24' />
        </li>
        <li>
          <img src={cssImg} alt={cssImg} className='h-12 md:h-24' />
        </li>
        <li>
          <img src={jsImg} alt={jsImg} className='h-14 md:h-24' />
        </li>
        <li>
          <img src={gitImg} alt={gitImg} className='h-8 md:h-12' />
        </li>
        <li>
          <img src={reactImg} alt={reactImg} className='h-12 md:h-24' />
        </li>
        <li>
          <img src={nodeImg} alt={nodeImg} className='h-12 md:h-24' />
        </li>
      </ul>
      {/* <span className='text-2xl'>- J'ai des notions sur -</span> */}
      <ul className='w-full flex justify-evenly items-center flex-wrap h-1/2'>
        <li>
          <img src={sqlImg} alt={sqlImg} className='h-12 md:h-12' />
        </li>
        <li>
          <img src={firebaseImg} alt={firebaseImg} className='h-8 md:h-10' />
        </li>
        <li>
          <img src={tailwindImg} alt={tailwindImg} className='h-8 md:h-10' />
        </li>
      </ul>
    </div>
  );
};

export default Stack;
