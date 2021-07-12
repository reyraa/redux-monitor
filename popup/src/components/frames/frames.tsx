import React, { useState, ChangeEvent } from 'react';
import FrameItem from './frameItem';
import Button from '../shared/button';
import Input from '../shared/input';
import {
  Frame,
  Source,
  Settings,
} from '../../store/reducers';

type Props = {
  frames: Frame[],
  framesCleared: () => void,
  settingsUpdated: (data: Partial<Settings>) => void,
  source:  Source,
}

const Frames: React.FC<Props> = ({
  frames,
  framesCleared,
  settingsUpdated,
  source,
}) => {
  const [query, setQuery] = useState('');
  const frameSelected = (index: number) => {
    settingsUpdated({
      source: { name: 'frames', index }
    });
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const filteredList = query.length > 2
    ? frames.filter(item => item.data.type.includes(query)) : frames;
  console.log('filteredList',  filteredList);
  return (
    <aside className="frames">
      <header>
          <div className="">
            <h2>Actions</h2>
            <span className="subtitle">Click for details</span>
          </div>
          <Button
            onClick={framesCleared}
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
          <ul id="frame-list">
            {
              filteredList.map((item, index) => (
                <FrameItem
                  key={`${item.data.type}-${index}`}
                  frame={item}
                  prevFrame={(index > 0 && filteredList.length > 0) ? filteredList[index - 1].meta.timestamp : undefined}
                  onSelect={frameSelected}
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

export default Frames;
