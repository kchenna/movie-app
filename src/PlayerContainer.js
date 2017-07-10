import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MoviePlayer from './MoviePlayer';

export class PlayerContainer extends Component {

  static propTypes = {
      track : PropTypes.object
  };

  render() {
    return (
        <MoviePlayer track={this.props.track}/>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        track: state.VideoReducer.selectedTrack
    }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlayerContainer));