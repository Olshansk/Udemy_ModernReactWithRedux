import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
