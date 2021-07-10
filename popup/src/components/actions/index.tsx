import { connect } from 'react-redux';
import Actions from './actions';
import { actionsCleared, settingsUpdated } from "../../store/actions";

type Source =
  | { name: 'state', index: null }
  | { name: 'actions', index: number }

type Settings = {
  source: Source,
  extensionStatus: string,
}

const mapStateToProps = (state: any) => ({
  actions: state.actions,
  source: state.settings.source,
});
const mapDispatchToProps = (dispatch: any) => ({
  actionsCleared: () => dispatch(actionsCleared()),
  settingsUpdated: (data: Partial<Settings>) => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
