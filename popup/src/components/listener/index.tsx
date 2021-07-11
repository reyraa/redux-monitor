import { connect } from 'react-redux';
import Listener from './listener';
import {
  stateUpdated, actionAdded, settingsUpdated, actionsRetrieved,
} from "../../store/actions";
import { Action, Settings } from '../../store/reducers';

type State = {
  [key: string]: any
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
