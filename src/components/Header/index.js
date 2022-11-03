import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Ryan McCarthy</h1>
      {props.children}
    </header>
  );
}

export default Header;
