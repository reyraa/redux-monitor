import React, { MouseEvent } from 'react';

type Props = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void,
  title: string,
  children?: React.ReactNode,
  icon: string,
}

const IconButton: React.FC<Props> = ({
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
