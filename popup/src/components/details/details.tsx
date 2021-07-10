import React, { ChangeEvent } from 'react';
import ReactJson from 'react-json-view';
import RadioButton from '../shared/radioButton';

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

type Props = {
  actions: Action[],
  state: any,
  source: Source,
  settingsUpdated: any,
}

type Options = {
  collapsed: number,
  theme?: string,
}

const ReduxState: React.FC<Props> = ({
  actions,
  state,
  source,
  settingsUpdated,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.value;
    settingsUpdated({
      source: { name, index: name === 'state' ? null : actions.length - 1}
    })
  };
  const options: Options = {
    collapsed: 1,
  };

  const json = source.name === 'state' ? state : actions[source.index];
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    options.theme = 'railscasts';
  }

  return (
    <main className="state">
      <header>
          <div>
            <h2>State</h2>
            <span className="subtitle">
              {
                source.name === 'state' ? 'Redux store' : 'Action details'
              }
            </span>
          </div>
          <div className="cta-buttons">
            <RadioButton
              id="action-source"
              name="source-group"
              value="actions"
              title="Action"
              onChange={onChange}
              valueRef={source.name}
              icon="ico-action"
            />
            <RadioButton
              id="state-source"
              name="source-group"
              value="state"
              title="State"
              onChange={onChange}
              valueRef={source.name}
              icon="ico-state"
            />
          </div>
      </header>
      <section className="box">
        <div className="scroll-view">
          <ReactJson
            src={json}
            {...options}
          />
        </div>
      </section>
    </main>
  );
};

export default ReduxState;
