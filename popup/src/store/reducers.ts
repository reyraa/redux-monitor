import ActionTypes from "./actionTypes";

type Meta = {
  date: number,
}

type Action = {
  type: string,
  data: any,
}

export type Frame = {
  data: Action,
  meta: Meta
}

export type FramesRetrieved = { type: ActionTypes.framesRetrieved, data: Frame[] };
export type FrameAdded = { type: ActionTypes.frameAdded, data: Frame };
export type FramesCleared = { type: ActionTypes.framesCleared };

type FramesAction = 
  | FramesRetrieved
  | FrameAdded
  | FramesCleared

const framesReducer = (state: Frame[] = [], action: FramesAction): Frame[] => {
  switch (action.type) {
    case ActionTypes.framesRetrieved:
      return action.data;
    case ActionTypes.frameAdded:
      return [...state, action.data]
    case ActionTypes.framesCleared:
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
  | { name: 'frames', index: number }

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
  frames: framesReducer,
});
