import { connect } from 'react-redux';
import Listener from './listener';
import {
  stateUpdated, frameAdded, settingsUpdated, framesRetrieved,
} from "../../store/actions";
import { Frame, Settings } from '../../store/reducers';

type State = {
  [key: string]: any
}

const mapStateToProps = (state: State) => ({
  extensionStatus: state.settings.extensionStatus,
});
const mapDispatchToProps = (dispatch) => ({
  settingsUpdated: (data: Partial<Settings>) => dispatch(settingsUpdated(data)),
  frameAdded: (data: Frame) => dispatch(frameAdded(data)),
  stateUpdated: (data: State) => dispatch(stateUpdated(data)),
  framesRetrieved: (data: Frame[]) => dispatch(framesRetrieved(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listener);
