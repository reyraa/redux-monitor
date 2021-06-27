import { connect } from 'react-redux';
import Details from './details';
import { settingsUpdated } from "../../store/action";

const mapStateToProps = (state: any) => ({
  state: state.state,
  actions: state.actions,
  settings: state.settings,
});
const mapDispatchToProps = (dispatch: any) => ({
  settingsUpdated: (data: any) => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
