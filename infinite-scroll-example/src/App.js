import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';

const imageList = [];
const api = {
  baseUrl: 'https://api.soundcloud.com',
  client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      hasMoreItems: true,
      nextHref: null
    };
  }

  loadItems(page) {
    var self = this;

    var url = api.baseUrl + '/users/8665091/favorites';
    if (this.state.nextHref) {
      url = this.state.nextHref;
    }

    console.log("self", self);

    qwest.get(url, {
      client_id: api.client_id,
      linked_partitioning: 1,
      page_size: 10
    }, {
        cache: true
      })
      .then(function (xhr, resp) {
        if (resp) {
          var tracks = self.state.tracks;
          resp.collection.map((track) => {
            if (track.artwork_url == null) {
              track.artwork_url = track.user.avatar_url;
            }

            tracks.push(track);
          });

          if (resp.next_href) {
            self.setState({
              tracks: tracks,
              nextHref: resp.next_href
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
        <div className="track" key={i}>
          <a href={track.permalink_url} target="_blank">
            <img src={track.artwork_url} width="150" height="150" />
            <p className="title">{track.title}</p>
          </a>
        </div>
      );
    });

    return (
      <div className="App">
        test
        <div style={{height:"700px", overflow:"auto"}}>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems.bind(this)}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}
          >
            {items}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;
