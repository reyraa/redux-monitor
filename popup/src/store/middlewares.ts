import { settingsUpdated } from './actions';
import actionDict from './actionTypes';

type Action = {
  type: string,
  data?: any
}

const actionsMiddleware = (store: any) => (next: (param: Action) => void) => (action: Action): void => {
  const { settings, actions } = store.getState();
  switch (action.type) {
    case actionDict.settingsUpdated: {
      if (action.data.source === 'actions' && settings.selectedAction === null) {
        store.dispatch(settingsUpdated({ selectedAction: actions.length - 1 }));
      } else if (action.data.source === 'state' && settings.selectedAction !== null) {
        store.dispatch(settingsUpdated({ selectedAction: null}));
      }
      break;
    }
    default:
      break;
  }
  next(action);
};

export default [
  actionsMiddleware,
];
