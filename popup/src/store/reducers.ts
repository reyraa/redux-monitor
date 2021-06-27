import actionDict from "./actionDict";

const actionsReducer = (state = [], action:any) => {
  switch (action.type) {
    case actionDict.actionsRetrieved:
      return action.data;
    case actionDict.actionAdded:
      return [...state, action.data]
    case actionDict.actionsCleared:
      return []
    default:
      return state
  }
};

const stateReducer = (state = {}, action:any) => {
  switch (action.type) {
    case actionDict.stateUpdated:
      return action.data
    case actionDict.stateReset:
      return {}
    default:
      return state
  }
};

const defaultSettings = {
  source: 'state',
  selectedAction: null,
  extensionStatus: 'notInitiated',
};

const settingsReducer = (state = defaultSettings, action:any) => {
  switch (action.type) {
    case actionDict.settingsUpdated:
      return { ...state, ...action.data }
    case actionDict.settingsReset:
      return defaultSettings
    default:
      return state
  }
};

export default ({
  settings: settingsReducer,
  state: stateReducer,
  actions: actionsReducer,
});
