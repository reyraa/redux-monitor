import React from 'react';
import { connect } from 'react-redux';
import { settingsUpdated } from "../../store/action";
import Panel from '../panel';
import Message from '../message';

const mapStateToProps = (state: any) => ({
  extensionStatus: state.settings.extensionStatus,
});

const mapDispatchToProps = (dispatch: any) => ({
  settingsUpdated: (data: any) => dispatch(settingsUpdated(data)),
});

const Main = ({ extensionStatus = 'loading' }) => (
  <>
    {
      extensionStatus === 'initiated'
      ? <Panel />
      : <Message />
    }
  </>
);

export default connect(mapStateToProps)(Main);
