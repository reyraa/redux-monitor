
import React, { ChangeEvent } from 'react';

type Props = {
  id: string,
  title?: string,
  children?: React.ReactNode,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  icon: string,
  value: string | number | readonly string[] | undefined,
  checked: boolean,
}

const Checkbox: React.FC<Props> = ({
  id,
  title,
  value,
  checked,
  children,
  onChange,
  icon,
}) => (
  <>
    <input
      type="checkbox"
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id} className={`${title ? 'box' : ''} button`}>
      <span className={`button-icon ${icon}`}></span>
      {
        title ? (
          <span className="button-text">
            { title || children }
          </span>
        ) : null
      }
    </label>
  </>
);

export default Checkbox;
