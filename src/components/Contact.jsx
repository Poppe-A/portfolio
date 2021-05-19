import { useState } from 'react';
import linkedinImg from '../assets/images/linkedin.png';
import phoneImg from '../assets/images/phone.png';
import mailImg from '../assets/images/at.png';

export default function Contact() {
  const [textToShow, setTextToShow] = useState(' ');
  return (
    <div className='w-full flex flex-col justify-between items-center flex-grow text-white pt-8 md:pt-16'>
      <div className='text-3xl md:text-6xl border-2 md:border-4 border-white p-2 md:p-6'>
        Me contacter
      </div>
      <div className='w-full flex justify-evenly'>
        <div className='transform transition duration-500 hover:scale-125'>
          <img
            className='h-14 md:h-20'
            src={phoneImg}
            alt={phoneImg}
            onClick={() => {
              setTextToShow('06 45 29 34 59');
            }}
          />
        </div>
        <div className='transform transition duration-500 hover:scale-125'>
          <img
            className='h-14 md:h-20'
            src={mailImg}
            alt={mailImg}
            onClick={() => {
              setTextToShow('poppe.antoine@gmail.com');
            }}
          />
        </div>
        <div className='transform transition duration-500 hover:scale-125'>
          <img
            className='h-14 md:h-20'
            src={linkedinImg}
            alt={linkedinImg}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/poppe-antoine/',
                '_blank'
              )
            }
          />
        </div>
      </div>

      <div className='h-20 text-2xl md:text-5xl'>{textToShow}</div>
    </div>
  );
}
