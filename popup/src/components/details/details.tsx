import React, { useState } from 'react';
import ReactJson from 'react-json-view';

const ReduxState = ({
  actions, state, settings, settingsUpdated,
}) => {
  const onChange = (e: any) => settingsUpdated({
    source: e.target.value,
  });

  const json = settings.source === 'state' ? state : actions[settings.selectedAction]

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
            <input
              type="radio"
              id="action-source"
              name="source-group"
              value="actions"
              checked={settings.source === 'actions'}
              onChange={onChange}
            />
            <label htmlFor="action-source" className="box button">
              <span className="button-icon icon-action"></span>
              <span className="button-text">Action</span>
            </label>
            <input
              type="radio"
              id="state-source"
              name="source-group"
              value="state"
              checked={settings.source === 'state'}
              onChange={onChange}
            />
            <label htmlFor="state-source" className="box button">
              <span className="button-icon icon-state"></span>
              <span className="button-text">State</span>
            </label>
          </div>
      </header>
      <section className="box">
        <div className="scroll-view">
          <ReactJson
            theme="railscasts"
            collapsed={1}
            src={json}
          />
        </div>
      </section>
    </main>
  );
};

export default ReduxState;
