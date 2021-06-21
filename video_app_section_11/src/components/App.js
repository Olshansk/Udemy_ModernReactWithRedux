import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: [],
    selected_video: null,
  };

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
    });
  };

  onVideoSelect = (video) => {
    console.log("App - onVideoSelect", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        ></VideoList>
        Num videos: {this.state.videos.length}.
      </div>
    );
  }
}

export default App;
