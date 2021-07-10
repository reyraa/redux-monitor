import React, { ChangeEvent } from 'react';

type Props = {
  id: string,
  name: string,
  value: string | number | readonly string[] | undefined,
  title?: string,
  children?: React.ReactNode,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  valueRef: any,
  icon: string,
}

const RadioButton: React.FC<Props> = ({
  id,
  name,
  value,
  title,
  children,
  onChange,
  valueRef,
  icon,
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
