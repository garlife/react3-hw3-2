import "./App.css";
import React from "react";

const Header = (props) => (
  <div>
    <div>
      <div className="mass1">{props.mass1}</div>
      <div>{props.mass2}</div>
    </div>
  </div>
);

export default Header;
