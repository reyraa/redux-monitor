import { connect } from 'react-redux';
import Actions from './actions';
import { actionsCleared, settingsUpdated } from "../../store/actions";
import { Settings } from '../../store/reducers';

const mapStateToProps = (state: any) => ({
  actions: state.actions,
  source: state.settings.source,
});
const mapDispatchToProps = (dispatch: any) => ({
  actionsCleared: () => dispatch(actionsCleared()),
  settingsUpdated: (data: Partial<Settings>) => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
