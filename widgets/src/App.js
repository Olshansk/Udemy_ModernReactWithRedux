import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

const options = [
  {
    label: "red",
    value: "Red",
  },
  {
    label: "blue",
    value: "Blue",
  },
  {
    label: "green",
    value: "Green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <h1>Widgets App Title</h1>
      <br></br>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      <div>
        {showDropdown ? (
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
