import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange(event) {
    this.setState({
      term: event.target.value,
    });
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
              value={this.state.term}
              // onChange={this.onInputChange}
              onChange={(e) =>
                this.setState({
                  term: e.target.value,
                })
              }
              onClick={this.onInputClick}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
