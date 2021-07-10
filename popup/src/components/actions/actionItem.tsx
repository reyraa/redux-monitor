import React from 'react';

type Meta = {
  date: Date,
}

type Action = {
  type: string,
  data: any,
  meta: Meta
}

type Props = {
  action: Action,
  onSelect: (index: number) => void,
  index: number,
  isSelected: boolean
}

const ActionItem: React.FC<Props> = ({
  action,
  onSelect,
  index,
  isSelected,
}) => (
  <li
    onClick={() => onSelect(index)}
    className={isSelected ? 'selected' : ''}
  >
    <span className="type">{action.type}</span>
    {/* <time>{action.meta.date}</time> */}
  </li>
);

export default ActionItem;
