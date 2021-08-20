import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="ui field">
          <label> Search Video</label>
          <input
            type="text"
            name="video-search"
            value={term}
            placeholder="Enter query for video search"
            onChange={(event) => setTerm(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
