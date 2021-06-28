import React, { useState } from "react";

const Search = (props) => {
  const [term, setTerm] = useState("");

  const onTermChanged = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div class="field">
          <label>Enter search term</label>
          <input
            type="text"
            name="term"
            value={term}
            onChange={(e) => onTermChanged(e)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
