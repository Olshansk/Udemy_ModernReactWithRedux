import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log("click");
  }

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              onClick={this.onInputClick}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
