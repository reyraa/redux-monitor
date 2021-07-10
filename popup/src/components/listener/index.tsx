import { connect } from 'react-redux';
import Listener from './listener';
import {
  stateUpdated, actionAdded, settingsUpdated, actionsRetrieved,
} from "../../store/actions";

type Meta = {
  date: Date,
}

type Action = {
  type: string,
  data: any,
  meta: Meta
}

type State = {
  [key: string]: any
}

type Settings= {
  source: string,
  selectedAction: number | null,
  extensionStatus: string,
}

const mapStateToProps = (state: State) => ({
  extensionStatus: state.settings.extensionStatus,
});
const mapDispatchToProps = (dispatch) => ({
  settingsUpdated: (data: Partial<Settings>) => dispatch(settingsUpdated(data)),
  actionAdded: (data: Action) => dispatch(actionAdded(data)),
  stateUpdated: (data: State) => dispatch(stateUpdated(data)),
  actionsRetrieved: (data: Action[]) => dispatch(actionsRetrieved(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listener);
