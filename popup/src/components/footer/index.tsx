import { connect } from 'react-redux';
import Footer from './footer';
import { settingsUpdated } from "../../store/actions";
import { Settings } from '../../store/reducers';

const mapStateToProps = (state: any) => ({
  settings: state.settings,
});
const mapDispatchToProps = (dispatch: any) => ({
  settingsUpdated: (data: Partial<Settings>) => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

