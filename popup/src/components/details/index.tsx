import { connect } from 'react-redux';
import Details from './details';
import { settingsUpdated } from "../../store/actions";

type Source =
  | { name: 'state', index: null }
  | { name: 'actions', index: number }

type SettingsProps = {
  source: Source,
  extensionStatus: string,
}

const mapStateToProps = (state: any) => ({
  state: state.state,
  actions: state.actions,
  source: state.settings.source,
});
const mapDispatchToProps = (dispatch: any) => ({
  settingsUpdated: (data: Partial<SettingsProps>) => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
