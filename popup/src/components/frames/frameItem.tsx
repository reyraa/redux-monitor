import React from 'react';
import Time from './time';
import { Frame } from '../../store/reducers';

type Props = {
  frame: Frame,
  onSelect: (index: number) => void,
  index: number,
  isSelected: boolean,
  prevDate?: number,
}

const FrameItem: React.FC<Props> = ({
  frame,
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
      <span className="type">{frame.data.type}</span>
      <Time
        date={frame.meta.date}
        prevDate={prevDate}
      />
    </div>
  </li>
);

export default FrameItem;
