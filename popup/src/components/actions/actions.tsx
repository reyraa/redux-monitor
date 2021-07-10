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

type Source =
  | { name: 'state', index: null }
  | { name: 'actions', index: number }

type Settings = {
  source: Source,
  extensionStatus: string,
}

type Props = {
  actions: Action[],
  actionsCleared: () => void,
  settingsUpdated: (data: Partial<Settings>) => void,
  source:  Source,
}

const Actions: React.FC<Props> = ({
  actions,
  actionsCleared,
  settingsUpdated,
  source,
}) => {
  const actionSelected = (index: number) => {
    settingsUpdated({
      source: { name: 'actions', index }
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
                  onSelect={actionSelected}
                  index={index}
                  isSelected={index === source.index}
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
