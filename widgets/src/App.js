import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// const items = [
//   {
//     title: "title 1",
//     content: "content 1",
//   },
//   {
//     title: "title 2",
//     content: "content 2",
//   },
//   {
//     title: "title 3",
//     content: "content 3",
//   },
// ];

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
  return (
    <div>
      <h1>Widgets App Title</h1>
      <br></br>
      <div>
        {/* <Accordion items={items}></Accordion> */}
        {/* <Search /> */}
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </div>
    </div>
  );
};

export default App;
