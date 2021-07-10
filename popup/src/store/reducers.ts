import ActionTypes from "./actionTypes";

type Meta = {
  date: Date,
}

type Action = {
  type: string,
  data: any,
  meta: Meta
}

type ActionsAction = 
  | { type: ActionTypes.actionsRetrieved, data: Action[] }
  | { type: ActionTypes.actionAdded, data: Action }
  | { type: ActionTypes.actionsCleared }

const actionsReducer = (state: Action[] = [], action: ActionsAction): Action[] => {
  switch (action.type) {
    case ActionTypes.actionsRetrieved:
      return action.data;
    case ActionTypes.actionAdded:
      return [...state, action.data]
    case ActionTypes.actionsCleared:
      return []
    default:
      return state
  }
};

type State = {
  [key: string]: any
}

type StateAction =
 | { type: ActionTypes.stateUpdated, data: State }
 | { type: ActionTypes.stateReset }

const stateReducer = (state = {}, action: StateAction): State => {
  switch (action.type) {
    case ActionTypes.stateUpdated:
      return action.data
    case ActionTypes.stateReset:
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

type Settings = {
  source: string,
  selectedAction: number | null,
  extensionStatus: string,
}

type SettingsAction = {
  type: string,
  data: Settings
}

const settingsReducer = (state = defaultSettings, action: SettingsAction): Settings => {
  switch (action.type) {
    case ActionTypes.settingsUpdated:
      return { ...state, ...action.data }
    case ActionTypes.settingsReset:
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
