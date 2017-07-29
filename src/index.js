import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import _ from 'lodash';


const API_KEY = "AIzaSyBBS3IMUphrWHY4ofFC_f1O7OiULclTbHc";

// Create a new component. This component should produce   some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [], selectedVideo: null};

    this.videoSearch('etthehiphoppreacher');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // if key and value have the same name, we can use this sintax sugar
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({videos: videos})
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300 );
    return (
      <div>
        <SearchBar onSearchTermChange = { videoSearch }/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList
          videos = {this.state.videos}
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          />
      </div>
    );
  }
}

// Take this component generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
