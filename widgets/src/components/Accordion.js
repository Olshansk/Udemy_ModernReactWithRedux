import React from "react";

const Accordion = ({ items }) => {
  const itemDivs = items.map((item) => {
    return (
      <div>
        {item.title}
        <div>{item.content}</div>
      </div>
    );
  });
  return (
    <div>
      <h1>Accordion</h1>
      {itemDivs}
    </div>
  );
};

export default Accordion;
