import ActionTypes from "./actionTypes";
import {
  State,
  Settings,
  Action,
  ActionsRetrieved,
  ActionAdded,
  ActionsCleared,
  StateUpdated,
  StateReset,
  SettingsUpdated,
  SettingsReset,
} from './reducers';

export const actionsRetrieved = (data: Action[]): ActionsRetrieved => ({
  type: ActionTypes.actionsRetrieved,
  data,
});

export const actionAdded = (data: Action): ActionAdded => ({
  type: ActionTypes.actionAdded,
  data,
});

export const actionsCleared = (): ActionsCleared => ({
  type: ActionTypes.actionsCleared,
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
