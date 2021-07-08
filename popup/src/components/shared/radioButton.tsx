import React from 'react';

const RadioButton = ({
  id, name, value, title, children, onChange, valueRef, icon,
}) => (
  <>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={valueRef === 'actions'}
      onChange={onChange}
    />
    <label htmlFor={id} className="box button">
      <span className={`button-icon ${icon}`}></span>
      <span className="button-text">
        { title || children }
      </span>
    </label>
  </>
);

export default RadioButton;
