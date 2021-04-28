import React from 'react';

const FooterItem = (props) => {
  return (
    <div className={`w-12 bg-white ${props.round ? 'rounded-full' : ''}`}>
      <img
        src={props.img}
        alt={props.img}
        onClick={() => window.open(props.url, '_blank')}
      ></img>
    </div>
  );
};

export default FooterItem;
