import ActionTypes from "./actionTypes";

type Meta = {
  date: Date,
}

export type Action = {
  type: string,
  data: any,
  meta: Meta
}

export type ActionsRetrieved = { type: ActionTypes.actionsRetrieved, data: Action[] };
export type ActionAdded = { type: ActionTypes.actionAdded, data: Action };
export type ActionsCleared = { type: ActionTypes.actionsCleared };

type ActionsAction = 
  | ActionsRetrieved
  | ActionAdded
  | ActionsCleared

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

export type State = { [key: string]: any }
export type StateUpdated = { type: ActionTypes.stateUpdated, data: State }
export type StateReset = { type: ActionTypes.stateReset }

type StateAction =
 | StateUpdated
 | StateReset

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

export type Source =
  | { name: 'state', index: null }
  | { name: 'actions', index: number }

export type Settings = {
  source: Source,
  extensionStatus: string,
}

export type SettingsUpdated = { type: ActionTypes.settingsUpdated, data: Partial<Settings> }
export type SettingsReset = { type: ActionTypes.settingsReset }

type SettingsAction = 
 | SettingsUpdated
 | SettingsReset

const defaultSettings: Settings = {
  source: { name: 'state', index: null },
  extensionStatus: 'notInitiated',
};

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
