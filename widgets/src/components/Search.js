import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [term, setTerm] = useState("");

  const onTermChanged = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    console.log("I run on initial render only");
  }, []);

  useEffect(() => {
    console.log("I run on every re-render");
  });

  useEffect(() => {
    console.log("I run on every re-render and when data has changed");
  }, [term]);

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
