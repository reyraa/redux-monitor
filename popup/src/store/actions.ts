import ActionTypes from "./actionTypes";
import {
  State,
  Settings,
  Frame,
  FramesRetrieved,
  FrameAdded,
  FramesCleared,
  StateUpdated,
  StateReset,
  SettingsUpdated,
  SettingsReset,
} from './reducers';

export const framesRetrieved = (data: Frame[]): FramesRetrieved => ({
  type: ActionTypes.framesRetrieved,
  data,
});

export const frameAdded = (data: Frame): FrameAdded => ({
  type: ActionTypes.frameAdded,
  data,
});

export const framesCleared = (): FramesCleared => ({
  type: ActionTypes.framesCleared,
});

export const stateUpdated= (data: State): StateUpdated => ({
  type: ActionTypes.stateUpdated,
  data,
});

export const stateReset = (): StateReset => ({
  type: ActionTypes.stateReset,
});

export const settingsUpdated = (data: Partial<Settings>): SettingsUpdated => ({
  type: ActionTypes.settingsUpdated,
  data,
});

export const settingsReset = (): SettingsReset => ({
  type: ActionTypes.settingsReset,
});
