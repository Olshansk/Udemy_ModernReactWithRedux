import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
// https://unsplash.com/documentation
// const ACCESS_KEY = '5OPUL1VkqKzHNB1ToeNF7CymkvY2cWI9Rj79AZqdQkc';
// const SECRET_KEY = '2hpjIaz4sAuRoeEpYca-QOmpKW3junejkCtBdbsfv0o';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log("onSearchSubmit: ", term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
