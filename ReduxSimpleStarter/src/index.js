import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyA2PK1IAHpWT--LEGuL24V8oxor4W6PCqo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
        })
    }

    render() {
        return (
            <div>
                <Searchbar />
                <VideoList videos = {this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(< App /> , document.querySelector('.container')); 