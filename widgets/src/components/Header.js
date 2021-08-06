import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="ui item" href="/">Accordion</Link>
      <Link className="ui item" href="/translate">Translate</Link>
      <Link className="ui item" href="/dropdown">Dropdown</Link>
      <Link className="ui item" href="/search">Search</Link>
    </div>
  );
};

export default Header;
