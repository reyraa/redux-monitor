import React, { useEffect } from "react";
import { Action, Settings } from '../../store/reducers';

type State = {
  [key: string]: any
}

interface Props {
  actionAdded: (data: Action) => void,
  stateUpdated: (data: State) => void,
  settingsUpdated: (data: Partial<Settings>) => void,
  actionsRetrieved: (data: Action[]) => void,
}

const Listener: React.FC<Props> = ({
  actionAdded,
  stateUpdated,
  settingsUpdated,
  actionsRetrieved,
}) => {
  useEffect(() => {
    try {
      browser.runtime.onMessage.addListener((message: any) => {
        if (message.direction === 'CNT->POP' || message.direction === 'BG->POP') {
          if (message.type === 'init' && (message.data.state || message.data.actions.length)) {
            settingsUpdated({ extensionStatus: 'initiated' });
            stateUpdated(message.data.state);
            actionsRetrieved(message.data.actions);
          } else if (message.type === 'instant') {
            actionAdded(message.data.action);
            stateUpdated(message.data.state);
          }
        } else {
          console.log('Irrelevant message direction');
        }
      });

      browser.runtime.sendMessage({
        type: 'init',
        direction: 'POP->BG'
      });
    } catch (e) {
      console.log('Error retrieving initial data', e);
    }
  }, []);

  return (<div className="noDisplay"></div>);
};

export default Listener;
