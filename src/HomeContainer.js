import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import InfiniteCardLoader from './InfiniteCardLoader';
import * as actions from './VideoAction';

const mapStateToProps = (state) => {
    return {
        tracks: state.VideoReducer.tracks,
        hasMoreItems: state.VideoReducer.hasMoreItems,
        nextHref: state.VideoReducer.nextHref
    }
};

const mapDispatchToProps = dispatch => ({
    setSelectedTrack :(track) => dispatch(actions.setSelectedTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InfiniteCardLoader));