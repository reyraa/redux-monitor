import React, { ChangeEvent } from 'react';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  icon: string,
  value: string,
}

const Input: React.FC<Props> = ({
  onChange, placeholder, icon, value,
}) => (
  <div className="input">
    {
      icon
        ? <span className={`input-icon ${icon}`} />
        : null
    }
    <input
      type="text"
      placeholder={placeholder || ''}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Input;
