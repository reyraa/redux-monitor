import { connect } from 'react-redux';
import Actions from './actions';
import { actionsCleared, settingsUpdated } from "../../store/actions";

type Settings = {
  source: string,
  selectedAction: number | null,
  extensionStatus: string,
}


const mapStateToProps = (state: any) => ({
  actions: state.actions,
  selectedAction: state.settings.selectedAction,
});
const mapDispatchToProps = (dispatch: any) => ({
  actionsCleared: () => dispatch(actionsCleared()),
  settingsUpdated: (data: Partial<Settings>) => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
