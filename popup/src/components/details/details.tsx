import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import RadioButton from '../shared/radioButton';

type Options = {
  collapsed: number,
  theme?: string,
}

const ReduxState = ({
  actions, state, settings, settingsUpdated,
}) => {
  const onChange = (e: any) => settingsUpdated({
    source: e.target.value,
  });
  const options: Options = {
    collapsed: 1,
  };

  const json = settings.source === 'state' ? state : actions[settings.selectedAction];
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  // const theme = darkThemeMq.matches ? 'railscasts' : 'rjv-default';
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
