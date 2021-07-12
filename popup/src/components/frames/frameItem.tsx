import React from 'react';
import Time from './time';
import { Frame } from '../../store/reducers';

type Props = {
  frame: Frame,
  onSelect: (index: number) => void,
  index: number,
  isSelected: boolean,
  prevFrame?: number,
}

const FrameItem: React.FC<Props> = ({
  frame,
  onSelect,
  index,
  isSelected,
  prevFrame,
}) => (
  <li
    onClick={() => onSelect(index)}
    className={isSelected ? 'selected' : ''}
  >
    <div>
      <span className="type">{frame.data.type}</span>
      <Time
        timestamp={frame.meta.timestamp}
        prevFrame={prevFrame}
      />
    </div>
  </li>
);

export default FrameItem;
