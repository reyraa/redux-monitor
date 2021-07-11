import { connect } from 'react-redux';
import Details from './details';
import { settingsUpdated } from "../../store/actions";
import { Settings } from '../../store/reducers';

const mapStateToProps = (state: any) => ({
  state: state.state,
  actions: state.actions,
  source: state.settings.source,
});
const mapDispatchToProps = (dispatch: any) => ({
  settingsUpdated: (data: Partial<Settings>) => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
