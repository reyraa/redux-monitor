import { connect } from 'react-redux';
import Frames from './frames';
import { framesCleared, settingsUpdated } from "../../store/actions";
import { Settings } from '../../store/reducers';

const mapStateToProps = (state: any) => ({
  frames: state.frames,
  source: state.settings.source,
});
const mapDispatchToProps = (dispatch: any) => ({
  framesCleared: () => dispatch(framesCleared()),
  settingsUpdated: (data: Partial<Settings>) => dispatch(settingsUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Frames);
