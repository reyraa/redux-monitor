import React from 'react';
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

type Settings = {
  source: 'state' | 'actions',
  selectedAction: null | number,
  extensionStatus: string,
};

type Props = {
  actions: Action[],
  state: any,
  settings: Settings,
  settingsUpdated: any,
}

type Options = {
  collapsed: number,
  theme?: string,
}

const ReduxState: React.FC<Props> = ({
  actions,
  state,
  settings,
  settingsUpdated,
}) => {
  const onChange = (e: any) => settingsUpdated({
    source: e.target.value,
  });
  const options: Options = {
    collapsed: 1,
  };

  const json = settings.source === 'state' ? state : actions[settings.selectedAction];
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
                settings.source === 'state' ? 'Redux store' : 'Action details'
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
              valueRef={settings.source}
              icon="ico-action"
            />
            <RadioButton
              id="state-source"
              name="source-group"
              value="state"
              title="State"
              onChange={onChange}
              valueRef={settings.source}
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
