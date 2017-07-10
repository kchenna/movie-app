import React, { Component,PropTypes } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from './Card';
import * as VideoApi from './VideoApi';


class InfiniteCardLoader extends Component {

    static propTypes = {
        router: PropTypes.object,
        setSelectedTrack: PropTypes.func
    };
  
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            pageno : 0
        };
    }

    loadItems(page) {
      var self = this;

      var pageno = 1;
      if(this.state.pageno > 1) {
          pageno = this.state.pageno;
      }
     
     VideoApi.getVideos(pageno)
        .then(function(resp) {
              if(resp) {
                  var tracks = self.state.tracks;
                  
                  resp.tracks.map((track) => {
                      tracks.push(track);
                  });

                  if(resp.hasMoreItems) {
                      self.setState({
                          tracks: tracks,
                          pageno: resp.page
                      });
                  } else {
                      self.setState({
                          hasMoreItems: false
                      });
                  }
              }
          });
  }

  
  render() {
        const loader = <div className="loader">Loading ...</div>;

        var items = [];
        this.state.tracks.map((track, i) => {
            items.push(
                <Card 
                track={track} 
                key={i} 
                router={this.props.router} 
                setSelectedTrack={this.props.setSelectedTrack} ></Card>
            );
        });

        return (
              <section className="main-content">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems.bind(this)}
                    hasMore={this.state.hasMoreItems}
                    loader={loader}>
                    <div className="tracks">
                        {items}
                    </div>
                </InfiniteScroll>
              </section>
        );
    }
}

export default InfiniteCardLoader;
