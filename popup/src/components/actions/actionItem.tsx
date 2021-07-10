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
  actionSelected: (index: number) => any,
  index: number,
  selectedAction: number
}

const ActionItem: React.FC<Props> = ({
  action,
  actionSelected,
  index,
  selectedAction,
}) => (
  <li
    onClick={() => actionSelected(index)}
    className={selectedAction === index ? 'selected' : ''}
  >
    <span className="type">{action.type}</span>
    {/* <time>{action.meta.date}</time> */}
  </li>
);

export default ActionItem;
