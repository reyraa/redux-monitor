import React, { useState, ChangeEvent } from 'react';
import ActionItem from './actionItem';
import Button from '../shared/button';
import Input from '../shared/input';

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
  const [query, setQuery] = useState('');
  const actionSelected = (index: number) => {
    settingsUpdated({
      source: { name: 'actions', index }
    });
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };
  
  const filteredList = query.length > 2
    ? actions.filter(item => item.type.includes(query)) : actions;

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
        <Input
          icon="ico-search"
          placeholder="Filter"
          onChange={onSearch}
          value={query}
        />
        <div className="scroll-view">
          <ul id="action-list">
            {
              filteredList.map((item, index) => (
                <ActionItem
                  key={`${item.type}-${index}`}
                  action={item}
                  prevDate={index > 0 ? actions[index - 1].meta.date : undefined}
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
