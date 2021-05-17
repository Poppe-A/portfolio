import React from 'react';
import './Modal.css';
import Backdrop from './Backdrop';

const modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.close}></Backdrop>
      <div
        className='Modal'
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh',
          opacity: props.show ? '1' : '0',
        }}
      >
        <div className='modalTitle'></div>
        <img className='modalImg'></img>
        <div className='modalSummary'></div>
        <button className='modalButton'>Voir le projet</button>
      </div>
    </>
  );
};

export default modal;
