import React from "react";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a className="ui item" href="/">Accordion</a>
      <a className="ui item" href="/translate">Translate</a>
      <a className="ui item" href="/dropdown">Dropdown</a>
      <a className="ui item" href="/search">Search</a>
    </div>
  );
};

export default Header;
