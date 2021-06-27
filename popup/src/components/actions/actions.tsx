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

const Actions = ({
  actions, actionsCleared, settingsUpdated, selectedAction,
}) => {
  const actionSelected = (index: number) => {
    settingsUpdated({
      selectedAction: index,
      source: 'actions',
    });
  };

  return (
    <aside className="actions">
      <header>
          <div className="">
            <h2>Actions</h2>
            <span className="subtitle">Click for details</span>
          </div>
          <button className="box button" onClick={actionsCleared}>
            <span className="button-icon icon-clear"></span>
            <span className="button-text">Clear</span>
          </button>
      </header>
      <section className="box">
        <div className="scroll-view">
          <ul id="action-list">
            {
              actions.map((item, index) => (
                <ActionItem
                  key={`${item.type}-${index}`}
                  action={item}
                  actionSelected={actionSelected}
                  index={index}
                  selectedAction={selectedAction}
                />
              ))
            }
          </ul>
        </div>
      </section>
    </aside>
  );
}

export default Actions;
