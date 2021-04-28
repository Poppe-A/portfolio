import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import FooterItem from '../components/FooterItem';

const Portfolio = () => {
  return (
    <div className='portfolio h-full w-full bg-black flex flex-col justify-between pb-4'>
      <Header />
      <About />
      <div className='flex justify-center '>
        <FooterItem img='/github.png' url='https://github.com/Poppe-A' round />
        <div className='w-16' />
        <FooterItem
          img='/linkedin.png'
          url='https://www.linkedin.com/in/poppe-antoine-106491ba/'
        />
      </div>
    </div>
  );
};

export default Portfolio;
