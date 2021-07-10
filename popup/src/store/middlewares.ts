import { settingsUpdated } from './actions';
import actionDict from './actionTypes';

const actionsMiddleware = (store: any) => (next: any) => (action: any) => {
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
