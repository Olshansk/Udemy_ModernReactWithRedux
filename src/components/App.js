import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

// https://unsplash.com/documentation
const ACCESS_KEY = "5OPUL1VkqKzHNB1ToeNF7CymkvY2cWI9Rj79AZqdQkc";
// const SECRET_KEY = '2hpjIaz4sAuRoeEpYca-QOmpKW3junejkCtBdbsfv0o';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    console.log("onSearchSubmit: ", term);
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    this.setState({
      images: response.data.results,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
      </div>
    );
  }
}

export default App;
