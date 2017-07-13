import React, { Component,PropTypes } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from './Card';
import * as VideoApi from './VideoApi';
import CircularProgress from 'material-ui/CircularProgress';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

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
            count:0,
            nextUrl: undefined,
            pageno : 0
        };
    }

    loadItems(page) {
      var self = this;

      var nextUrl = "http://spsenthil.com:8080/movie/tamil/metadata/1/";
      
      if(this.state.nextUrl) {
          nextUrl = this.state.nextUrl;
      }
     
     VideoApi.getVideos(nextUrl)
        .then(function(resp) {
              if(resp) {
                  var tracks = self.state.tracks;
                  
                  resp.tracks.map((track) => {
                      tracks.push(track);
                  });

                  if(resp.hasMoreItems) {
                      self.setState({
                          tracks: tracks,
                          nextUrl: resp.nextUrl
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

        const styles = {
            flex :{
                display : 'flex'
            },
            progress :{
                margin :'0 auto'
            },
            top :{
                marginTop:'10px'
            }
        }


        const loader = <div style={styles.flex}><CircularProgress style={styles.progress}/></div>;

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
                  <AppBar
                    title="Hello"/>
                   <div style={styles.top}>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadItems.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={loader}>
                        <div className="tracks">
                            {items}
                        </div>
                    </InfiniteScroll>
               </div>
              </section>
        );
    }
}

export default InfiniteCardLoader;
