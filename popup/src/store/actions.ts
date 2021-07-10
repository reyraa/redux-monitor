import ActionTypes from "./actionTypes";

type Meta = {
  date: Date,
}

type Action = {
  type: string,
  data: any,
  meta: Meta
}

type ActionsRetrieved = {
  type: string,
  data: Action[]
}

type ActionAdded = {
  type: string,
  data: Action
}

type DataLessAction = {
  type: string
}

type Source =
  | { name: 'state', index: null }
  | { name: 'actions', index: number }

type SettingsProps = {
  source: Source,
  extensionStatus: string,
}

type SettingAction = {
  type: string,
  data: Partial<SettingsProps>
}

type StateProps = {
  [key: string]: any
}

type StateAction = {
  type: string,
  data: StateProps
}

export const actionsRetrieved = (data: Action[]): ActionsRetrieved => ({
  type: ActionTypes.actionsRetrieved,
  data,
});

export const actionAdded = (data: Action): ActionAdded => ({
  type: ActionTypes.actionAdded,
  data,
});

export const actionsCleared = (): DataLessAction => ({
  type: ActionTypes.actionsCleared,
});

export const stateUpdated= (data: StateProps): StateAction => ({
  type: ActionTypes.stateUpdated,
  data,
});

export const stateReset = (): DataLessAction => ({
  type: ActionTypes.stateReset,
});

export const settingsUpdated = (data: Partial<SettingsProps>): SettingAction => ({
  type: ActionTypes.settingsUpdated,
  data,
});

export const settingsReset = (): DataLessAction => ({
  type: ActionTypes.settingsReset,
});
