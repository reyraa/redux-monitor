import { connect } from 'react-redux';
import Listener from './listener';
import {
  stateUpdated, actionAdded, settingsUpdated, actionsRetrieved,
} from "../../store/action";

const mapStateToProps = (state: any) => ({
  extensionStatus: state.settings.extensionStatus,
});
const mapDispatchToProps = (dispatch: any) => ({
  settingsUpdated: (data: any) => dispatch(settingsUpdated(data)),
  actionAdded: (data: any) => dispatch(actionAdded(data)),
  stateUpdated: (data: any) => dispatch(stateUpdated(data)),
  actionsRetrieved: (data: any) => dispatch(actionsRetrieved(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listener);
