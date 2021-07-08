import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onTermChanged = (event) => {
    setTerm(event.target.value);
  };

  // Not used
  useEffect(() => {
    console.log("I run on initial render only");
  }, []);

  // Not used
  useEffect(() => {
    console.log("I run on every re-render");
  });

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setSearchResults(data.query.search);
    };
    if (term) {
      search();
    }
  }, [term]);

  const renderedResults = searchResults.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            type="text"
            name="term"
            value={term}
            onChange={(e) => onTermChanged(e)}
          ></input>
        </div>
      </div>
      <div className="ui relaxed divided list">{renderedResults}</div>
    </div>
  );
};

export default Search;
