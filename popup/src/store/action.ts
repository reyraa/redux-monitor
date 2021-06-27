import actionDict from "./actionDict";

export const actionsRetrieved = (data: any) => ({
  type: actionDict.actionsRetrieved,
  data,
});

export const actionAdded = (data: any) => ({
  type: actionDict.actionAdded,
  data,
});

export const actionsCleared = () => ({
  type: actionDict.actionsCleared,
});

export const stateUpdated= (data: any) => ({
  type: actionDict.stateUpdated,
  data,
});

export const stateReset = () => ({
  type: actionDict.stateReset,
});

export const settingsUpdated = (data: any) => ({
  type: actionDict.settingsUpdated,
  data,
});

export const settingsReset = () => ({
  type: actionDict.settingsReset,
});
