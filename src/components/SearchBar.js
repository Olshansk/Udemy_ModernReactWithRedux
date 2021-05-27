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

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
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
