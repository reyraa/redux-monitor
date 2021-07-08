import React from 'react';

const IconButton = ({
  onClick, title, children, icon,
}) => (
  <button className="box button" onClick={onClick}>
    <span className={`button-icon ${icon}`}></span>
    <span className="button-text">
      { title || children }
    </span>
  </button>
);

export default IconButton;
