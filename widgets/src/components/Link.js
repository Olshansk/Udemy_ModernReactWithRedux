import React from "react";

const Link  = (props) => {
  const {className, href, children} = props;

  const onClick = (event) => {
    event.preventDefaults();
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
