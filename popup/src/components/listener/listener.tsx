import React, { useEffect } from "react";
import { Frame, Settings } from '../../store/reducers';

type State = {
  [key: string]: any
}

interface Props {
  frameAdded: (data: Frame) => void,
  stateUpdated: (data: State) => void,
  settingsUpdated: (data: Partial<Settings>) => void,
  framesRetrieved: (data: Frame[]) => void,
}

const Listener: React.FC<Props> = ({
  frameAdded,
  stateUpdated,
  settingsUpdated,
  framesRetrieved,
}) => {
  useEffect(() => {
    try {
      browser.runtime.onMessage.addListener((message: any) => {
        if (message.direction === 'CNT->POP' || message.direction === 'BG->POP') {
          if (message.type === 'init' && (message.data.state || message.data.frames.length)) {
            settingsUpdated({ extensionStatus: 'initiated' });
            stateUpdated(message.data.state);
            framesRetrieved(message.data.frames);
          } else if (message.type === 'frame') {
            frameAdded(message.data.frame);
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
