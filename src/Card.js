import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';

export default class Card extends Component {

  static propTypes = {
        track: PropTypes.object,
        onTouchTap : PropTypes.func,
        router: PropTypes.object,
        setSelectedTrack: PropTypes.func
    };
  

  render() {

    const onItemTouchTap = (e) => {
        e.preventDefault();
        this.props.setSelectedTrack(this.props.track);
        this.props.router.push('/player');
    };

    return (
            <div className="track" onClick={onItemTouchTap} >
                <img  src={this.props.track.image} width="150" height="150" />
                <p className="title" title={this.props.track.title}>{this.props.track.title}</p>
            </div>
    );
  }
}