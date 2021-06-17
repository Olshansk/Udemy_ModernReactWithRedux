import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // TODO: use axios to make a network request
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label> Search Video</label>
            <input
              type="text"
              name="video-search"
              value={this.state.term}
              placeholder="Enter query for video search"
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
