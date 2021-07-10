import React from 'react';
import { connect } from 'react-redux';
import Panel from '../panel';
import Message from '../message';

const mapStateToProps = (state: any) => ({
  extensionStatus: state.settings.extensionStatus,
});

const Main = ({ extensionStatus = 'loading' }) => (
  <>
    {
      extensionStatus === 'initiated' || true
      ? <Panel />
      : <Message />
    }
  </>
);

export default connect(mapStateToProps)(Main);
