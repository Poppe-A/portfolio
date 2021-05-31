import React, { useRef } from 'react';
import Timeline from './Timeline';
import Stack from './Stack';
import CV from './CV';
import MeMyselfAndI from './MeMyselfAndI';
import './About.css';

const About = () => {
  const infosRef = useRef();
  const timelineRef = useRef();
  const stackRef = useRef();

  return (
    <div className='fixedSize text-white flex flex-col items-center justify-between flex-grow'>
      <div className='min-h-screen flex flex-col justify-evenly items-center'>
        <div className='titleContainer flex'>
          <h1 className='text-xl md:text-4xl border-green-600 border-2 md:border-4 text-center p-3 md:p-6 mb-4 md:mt-0 text'>
            Je suis <span className={'text-green-600'}>A</span>
            ntoine, développeur Web
          </h1>
        </div>
        <div className='text-center px-4 text-3xl md:text-6xl'>
          Bienvenue sur mon <span className='text-green-600'>P</span>
          ortfolio !
        </div>
        <div
          className='triangle'
          onClick={() =>
            infosRef.current.scrollIntoView({
              behavior: 'smooth',
            })
          }
        ></div>{' '}
      </div>
      <div
        ref={infosRef}
        className='md:min-h-screen pt-16 md:pt-8 flex flex-col justify-evenly items-center'
      >
        <h1 className='text-xl md:text-4xl border-green-600 border-2 md:border-4 text-center p-3 md:p-6 mb-4 md:mt-0 text'>
          <span className={'text-green-600'}>M</span>
          on parcours
        </h1>
        <MeMyselfAndI />
        <div
          className='triangle mt-16 md:mt-0'
          onClick={() =>
            timelineRef.current.scrollIntoView({
              behavior: 'smooth',
            })
          }
        ></div>
      </div>
      <div ref={timelineRef} className='w-full mb-12 md:mb-36'>
        <Timeline />
        <CV />
      </div>

      <div
        className='triangle'
        onClick={() =>
          stackRef.current.scrollIntoView({
            behavior: 'smooth',
          })
        }
      ></div>
      <div
        id='stack'
        className='min-h-screen flex flex-col justify-evenly items-center w-full mt-8 md:mt-32'
        ref={stackRef}
      >
        <h1 className='text-xl md:text-4xl border-green-600 border-2 md:border-4 text-center p-3 md:p-6 mb-4 md:mt-0 text'>
          <span className={'text-green-600'}>M</span>a stack
        </h1>
        <Stack />
      </div>

      {/* {isMobile ? <CV /> : null} */}
    </div>
  );
};

export default About;
