import React from 'react';
import Time from './time';
import { Action } from '../../store/reducers';

type Props = {
  action: Action,
  onSelect: (index: number) => void,
  index: number,
  isSelected: boolean,
  prevDate?: Date,
}

const ActionItem: React.FC<Props> = ({
  action,
  onSelect,
  index,
  isSelected,
  prevDate,
}) => (
  <li
    onClick={() => onSelect(index)}
    className={isSelected ? 'selected' : ''}
  >
    <div>
      <span className="type">{action.type}</span>
      <Time
        date={action.meta.date}
        prevDate={prevDate}
      />
    </div>
  </li>
);

export default ActionItem;
