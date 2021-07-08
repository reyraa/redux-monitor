import React from 'react';

const ActionItem = ({
  action, actionSelected, index, selectedAction,
}) => (
  <li
    onClick={() => actionSelected(index)}
    className={selectedAction === index ? 'selected' : ''}
  >
    <span>{action.type}</span>
  </li>
);

export default ActionItem;
