import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "title 1",
    content: "content 1",
  },
  {
    title: "title 2",
    content: "content 2",
  },
  {
    title: "title 3",
    content: "content 3",
  },
];

export default () => {
  return (
    <div>
      <h1>Widgets App Title</h1>
      <br></br>
      <div>
        {/* <Accordion items={items}></Accordion> */}
        <Search />
      </div>
    </div>
  );
};
