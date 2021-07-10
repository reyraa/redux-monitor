import React from 'react';
import ActionItem from './actionItem';
import Button from '../shared/button';

type Meta = {
  date: Date,
}

type Action = {
  type: string,
  data: any,
  meta: Meta
}

type Props = {
  actions: Action[],
  actionsCleared: () => void,
  settingsUpdated: (data: any) => void,
  selectedAction:  number,
}

const Actions: React.FC<Props> = ({
  actions,
  actionsCleared,
  settingsUpdated,
  selectedAction,
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
          <Button
            onClick={actionsCleared}
            title="Clear"
            icon="ico-clear"
          />
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
