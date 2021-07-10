import { connect } from 'react-redux';
import Actions from './actions';
import { actionsCleared, settingsUpdated } from "../../store/actions";

const mapStateToProps = (state: any) => ({
  actions: state.actions,
  selectedAction: state.settings.selectedAction,
});
const mapDispatchToProps = (dispatch: any) => ({
  actionsCleared: () => dispatch(actionsCleared()),
  settingsUpdated: (data: any) => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
