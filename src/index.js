import "./Icons.styl";
import React from "react";
import ReactDOM from "react-dom";

const Icons = () =>
  ["Facebook", "Window"].map((icon, index) => (
    <div className={"Icon " + icon} key={index} />
  ));

ReactDOM.render(<Icons />, document.getElementById("Body"));
